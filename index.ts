import * as angular from 'angular'

// providers
// TODO: add more
export let $httpProvider: angular.IHttpProvider
export let $logProvider: angular.ILogProvider

// services
export let $anchorScroll: angular.IAnchorScrollService
export let $cacheFactory: angular.ICacheFactoryService
export let $compile: angular.ICompileService
export let $controller: angular.IControllerService
export let $document: angular.IDocumentService
export let $exceptionHandler: angular.IExceptionHandlerService
export let $filter: angular.IFilterService
export let $http: angular.IHttpService
export let $httpBackend: angular.IHttpBackendService
export let $httpParamSerializer: angular.IHttpParamSerializer
export let $httpParamSerializerJQLike: any
export let $injector: angular.auto.IInjectorService
export let $interpolate: angular.IInterpolateService
export let $interval: angular.IIntervalService
export let $locale: angular.ILocaleService
export let $location: angular.ILocationService
export let $log: angular.ILogService
export let $parse: angular.IParseService
export let $provide: angular.auto.IProvideService
export let $q: angular.IQService
export let $rootElement: angular.IRootElementService
export let $rootScope: angular.IRootScopeService
export let $sce: angular.ISCEService
export let $sceDelegate: angular.ISCEDelegateService
export let $templateCache: angular.ITemplateCacheService
export let $templateRequest: angular.ITemplateRequestService
export let $timeout: angular.ITimeoutService
export let $window: angular.IWindowService
export let $xhrFactory: any

// prevent double-loading, which has the potential
// to prevent sharing state between services
let m: angular.IModule
try {
  m = angular.module('bcherny/ngimport')
} catch (e) {
  m = angular.module('bcherny/ngimport', [])
}

m.config(['$provide', '$httpProvider', '$logProvider', (
  $a: angular.auto.IProvideService,
  $b: angular.IHttpProvider,
  $c: angular.ILogProvider
) => {
  $provide = $a
  $httpProvider = $b
  $logProvider = $c
}])

m.run(['$injector', ($i: angular.auto.IInjectorService) => {
  $anchorScroll = $i.get('$anchorScroll')
  $cacheFactory = $i.get('$cacheFactory')
  $compile = $i.get('$compile')
  $controller = $i.get('$controller')
  $document = $i.get('$document')
  $exceptionHandler = $i.get('$exceptionHandler')
  $filter = $i.get('$filter')
  $http = $i.get('$http')
  $httpBackend = $i.get('$httpBackend')
  $httpParamSerializer = $i.get('$httpParamSerializer')
  $httpParamSerializerJQLike = $i.get('$httpParamSerializerJQLike') as angular.IHttpParamSerializer
  $injector = $i
  $interpolate = $i.get('$interpolate')
  $interval = $i.get('$interval')
  $locale = $i.get('$locale')
  $location = $i.get('$location')
  $log = $i.get('$log')
  $parse = $i.get('$parse')
  $q = $i.get('$q')
  $rootElement = $i.get('$rootElement')
  $rootScope = $i.get('$rootScope')
  $sce = $i.get('$sce')
  $sceDelegate = $i.get('$sceDelegate')
  $templateCache = $i.get('$templateCache')
  $templateRequest = $i.get('$templateRequest')
  $timeout = $i.get('$timeout')
  $window = $i.get('$window')
  $xhrFactory = $i.get('$xhrFactory') as angular.IXhrFactory<any>
}])
