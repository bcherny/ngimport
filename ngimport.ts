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

// TODO: add mgMock/ngMockE2E services

angular.module('bcherny/ngimport', []).run(function($injector: angular.auto.IInjectorService) {
  $anchorScroll = <angular.IAnchorScrollService>$injector.get('$anchorScroll')
  $cacheFactory = <angular.ICacheFactoryService>$injector.get('$cacheFactory')
  $compile = <angular.ICompileService>$injector.get('$compile')
  $controller = <angular.IControllerService>$injector.get('$controller')
  $document = <angular.IDocumentService>$injector.get('$document')
  $exceptionHandler = <angular.IExceptionHandlerService>$injector.get('$exceptionHandler')
  $filter = <angular.IFilterService>$injector.get('$filter')
  $http = <angular.IHttpService>$injector.get('$http')
  $httpBackend = <angular.IHttpBackendService>$injector.get('$httpBackend')
  $httpParamSerializer = <angular.IHttpParamSerializer>$injector.get('$httpParamSerializer')
  $httpParamSerializerJQLike = <any>$injector.get('$httpParamSerializerJQLike')
  $injector = <angular.auto.IInjectorService>$injector
  $interpolate = <angular.IInterpolateService>$injector.get('$interpolate')
  $interval = <angular.IIntervalService>$injector.get('$interval')
  $locale = <angular.ILocaleService>$injector.get('$locale')
  $location = <angular.ILocationService>$injector.get('$location')
  $log = <angular.ILogService>$injector.get('$log')
  $parse = <angular.IParseService>$injector.get('$parse')
  $q = <angular.IQService>$injector.get('$q')
  $rootElement = <angular.IRootElementService>$injector.get('$rootElement')
  $rootScope = <angular.IRootScopeService>$injector.get('$rootScope')
  $sce = <angular.ISCEService>$injector.get('$sce')
  $sceDelegate = <angular.ISCEDelegateService>$injector.get('$sceDelegate')
  $templateCache = <angular.ITemplateCacheService>$injector.get('$templateCache')
  $templateRequest = <angular.ITemplateRequestService>$injector.get('$templateRequest')
  $timeout = <angular.ITimeoutService>$injector.get('$timeout')
  $window = <angular.IWindowService>$injector.get('$window')
  $xhrFactory = <any>$injector.get('$xhrFactory')
})