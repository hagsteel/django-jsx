# Django JSX template engine

Requires Django 1.8 (because you want to use multiple template engines).

*Note* The server has to be restarted for template updates as the templates are cached on the template server.

## Installation

To auto start the server add `django_jsx` to `INSTALLED_APPS`

Add `'django_jsx.template.backend.JsxTemplates'` to the `TEMPLATES` setting

    TEMPLATES = [
        ...
        {
            'BACKEND': 'django_jsx.template.backend.JsxTemplates',
            'DIRS': [
                join(BASE_DIR, 'static/js/src')
            ]
        }
    ]
    

## Usage

*Note* ES6 templates needs to be transpiled as babel-node is not for production use


## TODO

*  Error reporting
*  Template exceptions
