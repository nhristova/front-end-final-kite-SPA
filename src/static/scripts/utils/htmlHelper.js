/* globals $ */
import Handlebars from 'handlebars';


const htmlHelper = {
    getHtml(viewName, model = null) {
        console.log('--- got to htmlCompile ---');

        return $.get(`./src/static/views/${viewName}.handlebars`)
            .then((view) => {
                const templateFunc = Handlebars.compile(view);
                const html = templateFunc(model);
                return html;
            });
    },

    insert(id, html) {
        console.log(`--- insertHtml in ${id} ---`);

        $(id).html(html);
    },
};

export { htmlHelper };
