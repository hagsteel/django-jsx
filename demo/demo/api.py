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
    paginator = Paginator(object_list=Data.objects.all(), per_page=paginate_by)
    page = paginator.page(page_num)

    data = {'results': [serialize(d) for d in page.object_list]}

    if page.has_next():
        data['next'] = '{}?page={}'.format(reverse('data_list'), page_num + 1)
    else:
        data['next'] = None

    if page.has_previous():
        data['previous'] = '{}?page={}'.format(reverse('data_list'), page_num - 1)
    else:
        data['previous'] = None

    return data

class DataListApi(View):
    def get(self, request, **kwargs):
        data = get_paginated_data()
        return HttpResponse(content=json.dumps(data), content_type='application/json')
