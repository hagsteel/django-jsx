from django.template import Engine
_dirs_undefined = object()


class JsEngine(Engine):
    def __init__(self, dirs=None, app_dirs=False,
                 allowed_include_roots=None, context_processors=None,
                 debug=False, loaders=None, string_if_invalid='',
                 file_charset='utf-8'):

        # Set the default loader to the JS loader
        if loaders is None:
            loaders = ['django_jsx.template.loaders.JsLoader']
            if app_dirs:
                loaders += ['django.template.loaders.app_directories.Loader']

        super().__init__(dirs=dirs, app_dirs=app_dirs,
                 allowed_include_roots=allowed_include_roots, context_processors=context_processors,
                 debug=debug, loaders=loaders, string_if_invalid=string_if_invalid,
                 file_charset=file_charset)

    def get_template(self, template_name, dirs=_dirs_undefined):
        if dirs is _dirs_undefined:
            dirs = None

        template_path, origin = self.find_template(template_name, dirs)
        return template_path
