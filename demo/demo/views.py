from django.views.generic import TemplateView


class Home(TemplateView):
    template_name = 'base.html'
    # template_name = 'transpiled/components/home.js'
    # template_name = 'transpiled/components/master.js'
    # template_name = 'transpiled/app.js'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['date'] = 'now'
        return context


class About(TemplateView):
    template_name = 'base.html'
    # template_name = 'transpiled/components/about.js'
    # template_name = 'transpiled/components/master.js'
    # template_name = 'transpiled/app.js'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['data'] = [1, 2, 3]
        context['pathname'] = '/about/'
        return context
