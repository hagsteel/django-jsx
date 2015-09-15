"""
Return only the file path
"""
from os.path import exists
from django.template.base import TemplateDoesNotExist
from django.template.loaders.filesystem import Loader


class JsLoader(Loader):
    def load_template_source(self, template_name, template_dirs=None):
        tried = []
        for filepath in self.get_template_sources(template_name, template_dirs):
            if exists(filepath):
                return filepath, None
            else:
                tried.append(filepath)

        if tried:
            error_msg = "Tried %s" % tried
        else:
            error_msg = ("Your template directories configuration is empty. "
                         "Change it to point to at least one template directory.")
        raise TemplateDoesNotExist(error_msg)

    def load_template(self, template_name, template_dirs=None):
        """
        Only the file path is returned
        """
        filepath, display_name = self.load_template_source(template_name, template_dirs)
        return filepath, template_name
