/* globals System */
/*eslint-disable */

System.config({

    // tell SystemJS which transpiler to use
    transpiler: 'plugin-babel',
    baseURL: './../',

    // tell SystemJS where to look for the dependencies
    map: {
        'plugin-babel': './node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': './node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',

        // libraries
        'jquery': './node_modules/jquery/dist/jquery.min.js',
        'navigo': './node_modules/navigo/lib/navigo.min.js',
        'handlebars': './node_modules/handlebars/dist/handlebars.min.js',
        // 'firebase': './node_modules/firebase/firebase.js',
        // 'toastr': './node_modules/toastr/build/toastr.min.js'
    },
    packages: {
        '/': {
            defaultExtension: 'js',
        },
    },
});

System.import('./src/static/app.js');
