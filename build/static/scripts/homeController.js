'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.homeController = undefined;

var _requester = require('./utils/requester');

var _requester2 = _interopRequireDefault(_requester);

var _htmlCompile = require('./utils/htmlCompile');

var _htmlCompile2 = _interopRequireDefault(_htmlCompile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals $ */
var homeController = {
    init: function init() {
        var _this = this;

        // get data
        // get template
        // compile
        this.getData().then(function (data) {
            return (0, _htmlCompile2.default)('home', data);
        }).then(function (html) {
            return _this.insertHtml('#test', html);
        });
    },
    getData: function getData() {
        var posts = [{ title: 'Blabla', content: 'Alabala' }, { title: 'Another', content: 'Funny' }];

        var events = [{ date: 'today', title: 'happy' }, { date: 'tomorrow', title: 'quick' }];

        var data = { model: posts, events: events };

        return Promise.resolve(data);
    },
    insertHtml: function insertHtml(id, html) {
        $(id).html(html);
    }
};

exports.homeController = homeController;