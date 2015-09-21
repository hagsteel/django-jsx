from django.core.urlresolvers import reverse
from django.utils.timezone import now
from django.views.generic import TemplateView, View
from .api import DataListApi, get_paginated_data
from .models import Data


class Home(TemplateView):
    template_name = 'base.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['date'] = str(now())
        return context


class About(TemplateView):
    template_name = 'base.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['data'] = [1, 2, 3]
        return context


class Form(TemplateView):
    template_name = 'base.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context


class PaginatedData(TemplateView):
    template_name = 'base.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['data_list'] = get_paginated_data(self.request.GET.get('page') or 1)
        return context
