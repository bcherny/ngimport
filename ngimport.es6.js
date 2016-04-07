export let $http = null;
export let $log = null;
export let $q = null;
export let $rootScope = null;
export let $templateCache = null;
export let $window = null;
angular.module('bcherny/ngimport', []).run(function ($injector) {
    $http = $injector.get('$http');
    $log = $injector.get('$log');
    $q = $injector.get('$q');
    $rootScope = $injector.get('$rootScope');
    $templateCache = $injector.get('$templateCache');
    $window = $injector.get('$window');
});
