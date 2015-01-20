require.config({
    baseUrl: '/Scripts',
    paths: {
        'jquery': './jquery-1.10.2',
        'angular': './angular',
        'ngResource': './angular-resource',
        'kendo': './kendo.all.min'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        ngResource: {
            deps: ['angular'],
            exports: 'angular'
        },
        angular: {
            exports: 'angular'
        },
        kendo: {
            deps: ["jquery"]
        }
    }
});

require([
    './app/appModule'
], function (appModule) {
   
    

});