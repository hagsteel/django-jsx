# Django JavaScript template engine

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
    

## Settings

### Optional

`DJANGO_ISOMORPHIC_RENDERER`
Absolute path to an alternative renderer



## Usage

*Note* ES6 templates needs to be "transpiled" as babel-node is not for production use.



### Using as part of a Django template

In a template:

    {% load jsx %}
    ...
    {% include_js 'foo.js' bar='hello' baz='world' %}


### Pure React components as templates

When using the react renderer, make sure the component is the default export

e.g 

    // ES6
    export default class Foo extends React.Component { ... }

    // CommonJS
    module.exports = React.Component { ... }


## Custom template renderer

Specify the path to the renderer in settings:

    DJANGO_ISOMORPHIC_RENDERER  = os.path.join(BASE_DIR, 'custom_renderer/custom.js')

The custom renderer has to implement one function: `render` that takes two arguments:

*  templatePath
*  context

An example custom template renderer:

    var renderer = {
        render: function(templatePath, context) {
            return 'This is a custom template renderer';
        }
    };
    
    
    module.exports = renderer;


## Additional info

If you see the warning:

> Warning: render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup

when using React, remove any white space around the element surrounding the `include_js` output.

e.g

change

    <div id="stuff">
        {% include_js 'something.js' data=data %}
    </div>

to

    <div id="stuff">{% include_js 'something.js' data=data %}</div>


## TODO

*  Build the server into one script file
*  Mention ES6 help: babel src --out-dir ./transpiled --watch 
