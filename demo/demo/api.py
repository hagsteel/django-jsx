import json
from django.core.paginator import Paginator
from django.core.urlresolvers import reverse
from django.http import HttpResponse
from django.views.generic import View
from .models import Data


class FormApi(View):
    def post(self, request, **kwargs):
        request_data = json.loads(request.body.decode())
        data = {
            'value': 'server replied: {}'.format(request_data['value'])
        }
        return HttpResponse(content=json.dumps(data), content_type='application/json')


def serialize(instance):
    return {'name': instance.name, 'number': instance.number}


def get_paginated_data(page_num=1, paginate_by=3):
    page_num = page_num or 1
    try:
        page_num = int(page_num)
    except ValueError:
        page_num = 1

    paginator = Paginator(object_list=Data.objects.all(), per_page=paginate_by)
    page = paginator.page(page_num)

    data = {
        'results': [serialize(d) for d in page.object_list],
        'next': None,
        'previous': None,
        'api_url': reverse('data_list'),
        'page_num': page_num
    }

    if page.has_next():
        data['next'] = '?page={}'.format(page_num + 1)

    if page.has_previous():
        data['previous'] = '?page={}'.format(page_num - 1)

    return data

class DataListApi(View):
    def get(self, request, **kwargs):
        page_num = request.GET.get('page')
        data = get_paginated_data(page_num)
        return HttpResponse(content=json.dumps(data), content_type='application/json')
