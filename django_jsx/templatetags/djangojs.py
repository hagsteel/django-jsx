from django import template
from django.conf import settings
from django_jsx.template.backend import JsTemplate
from django_jsx.template.loaders import JsLoader

register = template.Library()
loader = JsLoader(engine=None)


class JsMissingTemplateDirException(Exception):
    pass


def _get_template_dirs():
    for t in settings.TEMPLATES:
        if t['BACKEND'] == 'django_jsx.template.backend.JsTemplates':
            return t['DIRS']
    return None


def _get_template_path(template_name):
    template_dirs = _get_template_dirs()
    if not template_dirs:
        return None
    template_path, _ = loader.load_template(template_name, template_dirs=template_dirs)
    return template_path


@register.simple_tag(takes_context=True)
def include_js(context, template_name, **kwargs):
    request = context.get('request')
    template_path = _get_template_path(template_name)
    if not template_path:
        raise JsMissingTemplateDirException('No template directory')
    template = JsTemplate(template_path)
    template_context = context.flatten()
    template_context.update(kwargs)
    context.update(kwargs)
    return template.render(template_context, request=request)
