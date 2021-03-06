angular.module('resortApp')
    .controller('mainCtrl', function($scope, $stateParams, $state, dataService) {

        var mountainItems = dataService.getMountainItems();
        var beachItems = dataService.getBeachItems();

        $scope.content = {
            title: 'ResortApp',
            type: $stateParams.type
        };

        if($stateParams.type && $stateParams.type === 'mountain') {

            $scope.sectionData = mountainItems;
            $scope.content.subtitle = 'The complete guide to vacationing in the mountains';
            $scope.content.intro = 'ResortApp for mountains resorts is reinventing the tourism industry using technology. With a complete vacationing guide, your vacation just got even better with our easy to use app.'

        } else if($stateParams.type && $stateParams.type === 'beach') {

            $scope.sectionData = beachItems;
            $scope.content.subtitle = 'The ultimate guide to vacationing at the beach';
            $scope.content.intro = 'ResortApp for beach resorts is reinventing the tourism industry using technology. With a complete vacationing guide, your vacation just got even better with our easy to use app.'

        } else {
            $state.go('home');
        }


    });