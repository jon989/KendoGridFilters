define([
    'angular',
    'kendo',
    './listController'
], function (angular, kendo, listController) {

    var app = angular.module('appModule', ['kendo.directives']);

    listController(app);

    return app;

});