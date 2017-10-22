'use strict';

var _router = require('./router');

console.log('--- in app.js starting initRoutes ---');

// $(() => {
//     initRoutes();
// });

/* globals $ */
window.addEventListener('load', function () {
  return (0, _router.initRoutes)();
});