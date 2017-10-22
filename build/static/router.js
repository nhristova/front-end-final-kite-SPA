'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initRoutes = exports.router = undefined;

var _navigo = require('navigo');

var _navigo2 = _interopRequireDefault(_navigo);

var _homeController = require('./scripts/homeController');

var _homeController2 = _interopRequireDefault(_homeController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _navigo2.default(null, true, '#');

var initRoutes = function initRoutes() {
    console.log('--- in router.js executing initRoutes ---');

    router.on(function () {
        return _homeController2.default.init();
    }).resolve();
    // router
    //     .notFound(() => notFoundController.init())
    //     .resolve();
};

exports.router = router;
exports.initRoutes = initRoutes;