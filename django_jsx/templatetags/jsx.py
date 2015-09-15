from django import template
from django.conf import settings
from django_jsx.client.template_client import render_template
from django_jsx.template.backend import JsxTemplate
from django_jsx.template.loaders import JsxLoader

register = template.Library()
loader = JsxLoader(engine=None)


def _get_template_dirs():
    for t in settings.TEMPLATES:
        if t['BACKEND'] == 'django_jsx.template.backend.JsxTemplates':
            return t['DIRS']
    return None


def _get_template_path(template_name):
    template_path, _ = loader.load_template(template_name, template_dirs=_get_template_dirs())
    return template_path


@register.simple_tag(takes_context=True)
def include_jsx(context, template_name, **kwargs):
    template_path = _get_template_path(template_name)
    template = JsxTemplate(template_path)
    # import ipdb;ipdb.set_trace()
    return template.render(kwargs)
    # return render_template(template_path, kwargs)
