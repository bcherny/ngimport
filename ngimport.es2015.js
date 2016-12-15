import * as angular from 'angular';
// providers
// TODO: add more
export var $httpProvider = undefined;
export var $logProvider = undefined;
// services
export var $anchorScroll = undefined;
export var $cacheFactory = undefined;
export var $compile = undefined;
export var $controller = undefined;
export var $document = undefined;
export var $exceptionHandler = undefined;
export var $filter = undefined;
export var $http = undefined;
export var $httpBackend = undefined;
export var $httpParamSerializer = undefined;
export var $httpParamSerializerJQLike = undefined;
export var $injector = undefined;
export var $interpolate = undefined;
export var $interval = undefined;
export var $locale = undefined;
export var $location = undefined;
export var $log = undefined;
export var $parse = undefined;
export var $provide = undefined;
export var $q = undefined;
export var $rootElement = undefined;
export var $rootScope = undefined;
export var $sce = undefined;
export var $sceDelegate = undefined;
export var $templateCache = undefined;
export var $templateRequest = undefined;
export var $timeout = undefined;
export var $window = undefined;
export var $xhrFactory = undefined;
// bootstrap a dummy application using our module, so the #run block
// below is synchronously called, and all of the injectables in it are
// guaranteed to be defined after this code is run.
// TODO: move this out into a separate module
// TODO: tests
function bootstrap(moduleName) {
    var div = document.createElement('div');
    document.body.appendChild(div);
    angular.bootstrap(div, [moduleName]);
    document.body.removeChild(div);
}
var isInstantiated = false;
// prevent double-loading, which has the potential
// to prevent sharing state between services
try {
    angular.module('bcherny/ngimport');
}
catch (e) {
    angular.module('bcherny/ngimport', [])
        .config(['$provide', '$httpProvider', '$logProvider', function ($a, $b, $c) {
            if (isInstantiated)
                return;
            $provide = $a;
            $httpProvider = $b;
            $logProvider = $c;
        }])
        .run(['$injector', function ($i) {
            if (isInstantiated)
                return;
            $anchorScroll = $i.get('$anchorScroll');
            $cacheFactory = $i.get('$cacheFactory');
            $compile = $i.get('$compile');
            $controller = $i.get('$controller');
            $document = $i.get('$document');
            $exceptionHandler = $i.get('$exceptionHandler');
            $filter = $i.get('$filter');
            $http = $i.get('$http');
            $httpBackend = $i.get('$httpBackend');
            $httpParamSerializer = $i.get('$httpParamSerializer');
            $httpParamSerializerJQLike = $i.get('$httpParamSerializerJQLike');
            $injector = $i;
            $interpolate = $i.get('$interpolate');
            $interval = $i.get('$interval');
            $locale = $i.get('$locale');
            $location = $i.get('$location');
            $log = $i.get('$log');
            $parse = $i.get('$parse');
            $q = $i.get('$q');
            $rootElement = $i.get('$rootElement');
            $rootScope = $i.get('$rootScope');
            $sce = $i.get('$sce');
            $sceDelegate = $i.get('$sceDelegate');
            $templateCache = $i.get('$templateCache');
            $templateRequest = $i.get('$templateRequest');
            $timeout = $i.get('$timeout');
            $window = $i.get('$window');
            $xhrFactory = $i.get('$xhrFactory');
            isInstantiated = true;
        }]);
    bootstrap('bcherny/ngimport');
}
