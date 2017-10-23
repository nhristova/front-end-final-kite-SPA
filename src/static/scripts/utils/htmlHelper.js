/* globals $ */
import Handlebars from 'handlebars';


const htmlHelper = {
    getHtml(viewName, model = null) {
        return $.get(`./src/static/views/${viewName}.handlebars`)
            .then((view) => {
                const templateFunc = Handlebars.compile(view);
                const html = templateFunc(model);
                return html;
            });
    },

    changeTitle(height, viewBag) {
        let classToRemove;
        let classToAdd;

        if (height === 'short') {
            classToRemove = 'nh-head-tall';
            classToAdd = 'nh-head-short';
            $('#action-buttons').hide();
        } else {
            classToRemove = 'nh-head-short';
            classToAdd = 'nh-head-tall';
            $('#action-buttons').show();
        }

        $('#title-content')
            .removeClass(classToRemove)
            .addClass(classToAdd);

        $('#page-name').html(viewBag.name);
        $('#page-info').html(viewBag.info);
    },

    insert(id, html) {
        $(id).html(html);
    },
};

export { htmlHelper };
