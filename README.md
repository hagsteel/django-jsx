# Django JavaScript template engine

Use Django 1.8 if you want to use multiple template engines.

*Note* The server has to be restarted for template updates as the templates are cached on the template server if you are using React.

It's important to know that the context is available on the client side, so putting sensitive data in the context is a bad idea.


## Why?

There are few easy to use libraries for rendering JavaScript server side for Django.
The aim was to create a solution that requires as little setup as possible and performs well.


## Installation

To auto start the server add `django_jsx` to `INSTALLED_APPS`

Add `'django_jsx.template.backend.JsxTemplates'` to the `TEMPLATES` setting

    TEMPLATES = [
        ...
        {
            'BACKEND': 'django_jsx.template.backend.JsTemplates',
            'DIRS': [
                join(BASE_DIR, 'static/js/src')
            ]
        }
    ]
    

## Settings

`DJANGO_ISOMORPHIC_AUTOSTART`
Automatically start the template server when the app is loaded. Defaults to `True`.

`DJANGO_ISOMORPHIC_RENDERER`
Absolute path to an alternative renderer.

`DJANGO_ISOMORPHIC_SOCKET_PATH`
Path to the unix domain socket. Default is `/tmp/template-server.sock`


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


## Example React component as template

A lot of this code was based on this: https://github.com/mhart/react-server-example

To use this example template as the sole base template (e.g no .html templates at all)
just include the required `<html></body>` etc. tags.
    
    import React from "react";
    import App from "../app"
    
    export default class Base extends React.Component {
        constructor(props) {
            super(props);
        }
    
        jsonProps() {
            // This allows us to ensure that the client and the server
            // have the same data
            return {__html: "window.props=" + JSON.stringify(this.props)};
        }
    
        children() {
            // This will render the <App /> component
            // Note the use of `React.renderToString` as this will
            // ensure the component is rendered with react ids (unlike this component which is static)
            const app = React.createFactory(App);
            return {__html: React.renderToString(app(this.props))};
        }
    
        render() {
            return (
                <div>
                    <h1>A base page</h1>
                    <div id="app" dangerouslySetInnerHTML={this.children()}></div>
                    <script type="text/javascript" dangerouslySetInnerHTML={this.jsonProps()} />
                </div>
            )
        }
    }


## Custom template renderer

Specify the path to the renderer in settings:

    DJANGO_ISOMORPHIC_RENDERER  = os.path.join(BASE_DIR, 'custom_renderer/custom.js')

The custom renderer has to implement one function: `render` that takes three arguments:

*  templatePath
*  context
*  request

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
