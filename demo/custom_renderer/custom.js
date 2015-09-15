var renderer = {
    render: function(templatePath, context) {
        var template = require(templatePath);
        return 'testing custom template';
        //return template.render(context);
    }
};


module.exports = renderer;
