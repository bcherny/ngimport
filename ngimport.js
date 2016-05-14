// prevent double-loading, which has the potential
// to prevent sharing state between services
let m = null;
try {
    m = angular.module('bcherny/ngimport');
}
catch (e) {
    m = angular.module('bcherny/ngimport', [])
        .value('$rootElement', angular.element());
}
const $i = angular.injector(['ng', 'bcherny/ngimport']);
// TODO: add mgMock/ngMockE2E services
export const $anchorScroll = $i.get('$anchorScroll');
export const $cacheFactory = $i.get('$cacheFactory');
export const $compile = $i.get('$compile');
export const $controller = $i.get('$controller');
export const $document = $i.get('$document');
export const $exceptionHandler = $i.get('$exceptionHandler');
export const $filter = $i.get('$filter');
export const $http = $i.get('$http');
export const $httpBackend = $i.get('$httpBackend');
export const $httpParamSerializer = $i.get('$httpParamSerializer');
export const $httpParamSerializerJQLike = $i.get('$httpParamSerializerJQLike');
export const $injector = $i;
export const $interpolate = $i.get('$interpolate');
export const $interval = $i.get('$interval');
export const $locale = $i.get('$locale');
export const $location = $i.get('$location');
export const $log = $i.get('$log');
export const $parse = $i.get('$parse');
export const $q = $i.get('$q');
export const $rootElement = $i.get('$rootElement');
export const $rootScope = $i.get('$rootScope');
export const $sce = $i.get('$sce');
export const $sceDelegate = $i.get('$sceDelegate');
export const $templateCache = $i.get('$templateCache');
export const $templateRequest = $i.get('$templateRequest');
export const $timeout = $i.get('$timeout');
export const $window = $i.get('$window');
export const $xhrFactory = $i.get('$xhrFactory');
// share a module's provider instances with ngimport
export function lift(module) {
    return module
        .constant('$anchorScroll', $anchorScroll)
        .constant('$cacheFactory', $cacheFactory)
        .constant('$compile', $compile)
        .constant('$controller', $controller)
        .constant('$document', $document)
        .constant('$exceptionHandler', $exceptionHandler)
        .constant('$filter', $filter)
        .constant('$http', $http)
        .constant('$httpBackend', $httpBackend)
        .constant('$httpParamSerializer', $httpParamSerializer)
        .constant('$httpParamSerializerJQLike', $httpParamSerializerJQLike)
        .constant('$injector', $injector)
        .constant('$interpolate', $interpolate)
        .constant('$interval', $interval)
        .constant('$locale', $locale)
        .constant('$location', $location)
        .constant('$log', $log)
        .constant('$parse', $parse)
        .constant('$q', $q)
        .constant('$rootElement', $rootElement)
        .constant('$rootScope', $rootScope)
        .constant('$sce', $sce)
        .constant('$sceDelegate', $sceDelegate)
        .constant('$templateCache', $templateCache)
        .constant('$templateRequest', $templateRequest)
        .constant('$timeout', $timeout)
        .constant('$window', $window)
        .constant('$xhrFactory', $xhrFactory);
}
