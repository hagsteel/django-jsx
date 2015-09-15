const renderer = {
    render(templatePath, context) {
        const template = require(templatePath);
        return template.render(context);
    }
};
