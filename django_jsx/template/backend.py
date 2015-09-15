from django.middleware.csrf import get_token
from django.template.backends.base import BaseEngine
from django.template.backends.utils import csrf_input
from django.template.engine import _dirs_undefined

from ..client.template_client import TemplateClient
from django_jsx.template.engine import JsEngine


class JsTemplates(BaseEngine):
    # Name of the subdirectory containing the templates for this engine
    # inside an installed application.
    app_dirname = 'foobar'

    def __init__(self, params):
        params = params.copy()
        options = params.pop('OPTIONS').copy()
        super().__init__(params)
        self.engine = JsEngine(self.dirs, self.app_dirs, **options)

    def get_template(self, template_name, dirs=_dirs_undefined):
        return JsTemplate(self.engine.get_template(template_name))


class JsTemplate(object):
    def __init__(self, template_path):
        self.template_path = template_path

    def render(self, context=None, request=None):
        render_static = False

        if context is None:
            context = {}
        if request is not None:
            if 'view' in context:
                view = context.pop('view')
                if hasattr(view, 'render_static'):
                    render_static = view.render_static
            context['csrf_input'] = csrf_input(request)
            context['csrf_token'] = get_token(request)

        client = TemplateClient()
        return client.render_template(self.template_path, context, render_static)
