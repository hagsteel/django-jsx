from django.middleware.csrf import get_token
from django.template import TemplateDoesNotExist, TemplateSyntaxError
from django.template.backends.base import BaseEngine
from django.template.backends.utils import csrf_input_lazy, csrf_token_lazy, csrf_input
from django.template.engine import Engine, _dirs_undefined

from ..client.template_client import TemplateClient
from django_jsx.template.engine import JsxEngine


class JsxTemplates(BaseEngine):
    # Name of the subdirectory containing the templates for this engine
    # inside an installed application.
    app_dirname = 'foobar'

    def __init__(self, params):
        params = params.copy()
        options = params.pop('OPTIONS').copy()
        super().__init__(params)


        self.engine = JsxEngine(self.dirs, self.app_dirs, **options)

    def get_template(self, template_name, dirs=_dirs_undefined):
        return JsxTemplate(self.engine.get_template(template_name))
        # try:
        #     return JsxTemplate(self.engine.get_template(template_name))
        # except foobar.TemplateNotFound as exc:
        #     raise TemplateDoesNotExist(exc.args)
        # except foobar.TemplateCompilationFailed as exc:
        #     raise TemplateSyntaxError(exc.args)


class JsxTemplate(object):
    def __init__(self, template_path):
        self.template_path = template_path

    def render(self, context=None, request=None):
        if context is None:
            context = {}
        if request is not None:
            if 'view' in context:
                context.pop('view')
            # context['request'] = request
            context['csrf_input'] = csrf_input(request)
            context['csrf_token'] = get_token(request)

        client = TemplateClient()
        client.connect()
        return client.render_template(self.template_path, context)
