angular.module('resortApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            controller: 'mainCtrl',
            templateUrl: './templates/home.html'
        })
        .state('resort', {
            url: '/:type',
            controller: 'mainCtrl',
            templateUrl: './templates/mountain-beach.html'
        });

});