from django.views.generic import TemplateView


class Home(TemplateView):
    template_name = 'transpiled/components/home.js'


class About(TemplateView):
    template_name = 'transpiled/components/about.js'
