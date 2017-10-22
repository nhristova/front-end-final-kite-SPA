"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* globals $ Handlebars */

function htmlCompile(viewName) {
    var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    return $.get("views/" + viewName + ".html").then(function (view) {
        var templateFunc = Handlebars.compile(view);
        var html = templateFunc(model);
        return html;
    });
}

exports.default = htmlCompile;