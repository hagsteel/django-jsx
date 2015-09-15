from django.views.generic import TemplateView


class Home(TemplateView):
    template_name = 'transpiled/components/home.js'
    # render_static = True

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['date'] = 'now'
        return context


class About(TemplateView):
    template_name = 'transpiled/components/about.js'
