"use strict";
var angular = require('angular');
// providers
// TODO: add more
exports.$httpProvider = undefined;
exports.$logProvider = undefined;
// services
exports.$anchorScroll = undefined;
exports.$cacheFactory = undefined;
exports.$compile = undefined;
exports.$controller = undefined;
exports.$document = undefined;
exports.$exceptionHandler = undefined;
exports.$filter = undefined;
exports.$http = undefined;
exports.$httpBackend = undefined;
exports.$httpParamSerializer = undefined;
exports.$httpParamSerializerJQLike = undefined;
exports.$injector = undefined;
exports.$interpolate = undefined;
exports.$interval = undefined;
exports.$locale = undefined;
exports.$location = undefined;
exports.$log = undefined;
exports.$parse = undefined;
exports.$provide = undefined;
exports.$q = undefined;
exports.$rootElement = undefined;
exports.$rootScope = undefined;
exports.$sce = undefined;
exports.$sceDelegate = undefined;
exports.$templateCache = undefined;
exports.$templateRequest = undefined;
exports.$timeout = undefined;
exports.$window = undefined;
exports.$xhrFactory = undefined;
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
            exports.$provide = $a;
            exports.$httpProvider = $b;
            exports.$logProvider = $c;
        }])
        .run(['$injector', function ($i) {
            if (isInstantiated)
                return;
            exports.$anchorScroll = $i.get('$anchorScroll');
            exports.$cacheFactory = $i.get('$cacheFactory');
            exports.$compile = $i.get('$compile');
            exports.$controller = $i.get('$controller');
            exports.$document = $i.get('$document');
            exports.$exceptionHandler = $i.get('$exceptionHandler');
            exports.$filter = $i.get('$filter');
            exports.$http = $i.get('$http');
            exports.$httpBackend = $i.get('$httpBackend');
            exports.$httpParamSerializer = $i.get('$httpParamSerializer');
            exports.$httpParamSerializerJQLike = $i.get('$httpParamSerializerJQLike');
            exports.$injector = $i;
            exports.$interpolate = $i.get('$interpolate');
            exports.$interval = $i.get('$interval');
            exports.$locale = $i.get('$locale');
            exports.$location = $i.get('$location');
            exports.$log = $i.get('$log');
            exports.$parse = $i.get('$parse');
            exports.$q = $i.get('$q');
            exports.$rootElement = $i.get('$rootElement');
            exports.$rootScope = $i.get('$rootScope');
            exports.$sce = $i.get('$sce');
            exports.$sceDelegate = $i.get('$sceDelegate');
            exports.$templateCache = $i.get('$templateCache');
            exports.$templateRequest = $i.get('$templateRequest');
            exports.$timeout = $i.get('$timeout');
            exports.$window = $i.get('$window');
            exports.$xhrFactory = $i.get('$xhrFactory');
            isInstantiated = true;
        }]);
    bootstrap('bcherny/ngimport');
}
