from django import template
from django.conf import settings
from django_jsx.template.backend import JsTemplate
from django_jsx.template.loaders import JsLoader

register = template.Library()
loader = JsLoader(engine=None)


def _get_template_dirs():
    for t in settings.TEMPLATES:
        if t['BACKEND'] == 'django_jsx.template.backend.JsTemplates':
            return t['DIRS']
    return None


def _get_template_path(template_name):
    template_path, _ = loader.load_template(template_name, template_dirs=_get_template_dirs())
    return template_path


@register.simple_tag(takes_context=True)
def include_js(context, template_name, **kwargs):
    request = context.get('request')
    template_path = _get_template_path(template_name)
    template = JsTemplate(template_path)
    return template.render(kwargs, request=request)
