from django.views.generic import TemplateView
from .api import DataSerializer, DataListApi
from .models import Data


class Home(TemplateView):
    template_name = 'base.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context


class About(TemplateView):
    template_name = 'base.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['data'] = [1, 2, 3]
        context['pathname'] = '/about/'
        return context


class Form(TemplateView):
    template_name = 'base.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['pathname'] = '/form/'
        return context


class PaginatedData(TemplateView):
    template_name = 'base.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['pathname'] = '/data/'
        api = DataListApi(request=self.request)
        data = api.dispatch(api.request).data
        context['data_list'] = data # [DataSerializer(instance=d).data for d in Data.objects.all()]
        return context
