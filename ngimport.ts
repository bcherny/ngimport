import * as angular from 'angular'

export let $anchorScroll: angular.IAnchorScrollService = undefined
export let $cacheFactory: angular.ICacheFactoryService = undefined
export let $compile: angular.ICompileService = undefined
export let $controller: angular.IControllerService = undefined
export let $document: angular.IDocumentService = undefined
export let $exceptionHandler: angular.IExceptionHandlerService = undefined
export let $filter: angular.IFilterService = undefined
export let $http: angular.IHttpService = undefined
export let $httpBackend: angular.IHttpBackendService = undefined
export let $httpParamSerializer: angular.IHttpParamSerializer = undefined
export let $httpParamSerializerJQLike: any = undefined
export let $injector: angular.auto.IInjectorService = undefined
export let $interpolate: angular.IInterpolateService = undefined
export let $interval: angular.IIntervalService = undefined
export let $locale: angular.ILocaleService = undefined
export let $location: angular.ILocationService = undefined
export let $log: angular.ILogService = undefined
export let $parse: angular.IParseService = undefined
export let $q: angular.IQService = undefined
export let $rootElement: angular.IRootElementService = undefined
export let $rootScope: angular.IRootScopeService = undefined
export let $sce: angular.ISCEService = undefined
export let $sceDelegate: angular.ISCEDelegateService = undefined
export let $templateCache: angular.ITemplateCacheService = undefined
export let $templateRequest: angular.ITemplateRequestService = undefined
export let $timeout: angular.ITimeoutService = undefined
export let $window: angular.IWindowService = undefined
export let $xhrFactory: any = undefined

// bootstrap a dummy application using our module, so the #run block
// below is synchronously called, and all of the injectables in it are
// guaranteed to be defined after this code is run.
// TODO: move this out into a separate module
// TODO: tests
export function bootstrap(moduleName: string): void {
  const div = document.createElement('div')
  document.body.appendChild(div)
  angular.bootstrap(div, [moduleName])
  document.body.removeChild(div)
}

// TODO: add mgMock/ngMockE2E services
angular.module('bcherny/ngimport', []).run(['$injector', function($i: angular.auto.IInjectorService) {
  $anchorScroll = <angular.IAnchorScrollService>$i.get('$anchorScroll')
  $cacheFactory = <angular.ICacheFactoryService>$i.get('$cacheFactory')
  $compile = <angular.ICompileService>$i.get('$compile')
  $controller = <angular.IControllerService>$i.get('$controller')
  $document = <angular.IDocumentService>$i.get('$document')
  $exceptionHandler = <angular.IExceptionHandlerService>$i.get('$exceptionHandler')
  $filter = <angular.IFilterService>$i.get('$filter')
  $http = <angular.IHttpService>$i.get('$http')
  $httpBackend = <angular.IHttpBackendService>$i.get('$httpBackend')
  $httpParamSerializer = <angular.IHttpParamSerializer>$i.get('$httpParamSerializer')
  $httpParamSerializerJQLike = <any>$i.get('$httpParamSerializerJQLike')
  $injector = $i
  $interpolate = <angular.IInterpolateService>$i.get('$interpolate')
  $interval = <angular.IIntervalService>$i.get('$interval')
  $locale = <angular.ILocaleService>$i.get('$locale')
  $location = <angular.ILocationService>$i.get('$location')
  $log = <angular.ILogService>$i.get('$log')
  $parse = <angular.IParseService>$i.get('$parse')
  $q = <angular.IQService>$i.get('$q')
  $rootElement = <angular.IRootElementService>$i.get('$rootElement')
  $rootScope = <angular.IRootScopeService>$i.get('$rootScope')
  $sce = <angular.ISCEService>$i.get('$sce')
  $sceDelegate = <angular.ISCEDelegateService>$i.get('$sceDelegate')
  $templateCache = <angular.ITemplateCacheService>$i.get('$templateCache')
  $templateRequest = <angular.ITemplateRequestService>$i.get('$templateRequest')
  $timeout = <angular.ITimeoutService>$i.get('$timeout')
  $window = <angular.IWindowService>$i.get('$window')
  $xhrFactory = <any>$i.get('$xhrFactory')
}])

bootstrap('bcherny/ngimport')