"use strict";
const angular = require('angular');
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
function lift(module) {
    return module
        .constant('$anchorScroll', exports.$anchorScroll)
        .constant('$cacheFactory', exports.$cacheFactory)
        .constant('$compile', exports.$compile)
        .constant('$controller', exports.$controller)
        .constant('$document', exports.$document)
        .constant('$exceptionHandler', exports.$exceptionHandler)
        .constant('$filter', exports.$filter)
        .constant('$http', exports.$http)
        .constant('$httpBackend', exports.$httpBackend)
        .constant('$httpParamSerializer', exports.$httpParamSerializer)
        .constant('$httpParamSerializerJQLike', exports.$httpParamSerializerJQLike)
        .constant('$injector', exports.$injector)
        .constant('$interpolate', exports.$interpolate)
        .constant('$interval', exports.$interval)
        .constant('$locale', exports.$locale)
        .constant('$location', exports.$location)
        .constant('$log', exports.$log)
        .constant('$parse', exports.$parse)
        .constant('$q', exports.$q)
        .constant('$rootElement', exports.$rootElement)
        .constant('$rootScope', exports.$rootScope)
        .constant('$sce', exports.$sce)
        .constant('$sceDelegate', exports.$sceDelegate)
        .constant('$templateCache', exports.$templateCache)
        .constant('$templateRequest', exports.$templateRequest)
        .constant('$timeout', exports.$timeout)
        .constant('$window', exports.$window)
        .constant('$xhrFactory', exports.$xhrFactory);
}
exports.lift = lift;
// bootstrap a dummy application using our module, so the #run block
// below is synchronously called, and all of the injectables in it are
// guaranteed to be defined after this code is run.
// TODO: move this out into a separate module
// TODO: tests
function bootstrap(moduleName) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    angular.bootstrap(div, [moduleName]);
    document.body.removeChild(div);
}
exports.bootstrap = bootstrap;
// prevent double-loading, which has the potential
// to prevent sharing state between services
let m = null;
try {
    m = angular.module('bcherny/ngimport');
}
catch (e) {
    m = angular.module('bcherny/ngimport', []);
}
// TODO: add mgMock/ngMockE2E services
m.run(['$injector', function ($i) {
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
    }]);
bootstrap('bcherny/ngimport');
