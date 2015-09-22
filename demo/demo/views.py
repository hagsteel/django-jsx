from django.views.generic import TemplateView
from .api import get_paginated_data


class Home(TemplateView):
    template_name = 'base.html'


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
