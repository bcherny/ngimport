import * as angular from 'angular'

// providers
// TODO: add more
export let $httpProvider: angular.IHttpProvider = undefined
export let $logProvider: angular.ILogProvider = undefined

// services
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
export let $provide: angular.auto.IProvideService = undefined
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
function bootstrap(moduleName: string): void {
  const div = document.createElement('div')
  document.body.appendChild(div)
  angular.bootstrap(div, [moduleName])
  document.body.removeChild(div)
}

// prevent double-loading, which has the potential
// to prevent sharing state between services
let m: angular.IModule = null
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

// TODO: add mgMock/ngMockE2E services
m.run(['$injector', ($i: angular.auto.IInjectorService) => {
  $anchorScroll = $i.get('$anchorScroll') as angular.IAnchorScrollService
  $cacheFactory = $i.get('$cacheFactory') as angular.ICacheFactoryService
  $compile = $i.get('$compile') as angular.ICompileService
  $controller = $i.get('$controller') as angular.IControllerService
  $document = $i.get('$document') as angular.IDocumentService
  $exceptionHandler = $i.get('$exceptionHandler') as angular.IExceptionHandlerService
  $filter = $i.get('$filter') as angular.IFilterService
  $http = $i.get('$http') as angular.IHttpService
  $httpBackend = $i.get('$httpBackend') as angular.IHttpBackendService
  $httpParamSerializer = $i.get('$httpParamSerializer') as angular.IHttpParamSerializer
  $httpParamSerializerJQLike = $i.get('$httpParamSerializerJQLike') as angular.IHttpParamSerializer
  $injector = $i
  $interpolate = $i.get('$interpolate') as angular.IInterpolateService
  $interval = $i.get('$interval') as angular.IIntervalService
  $locale = $i.get('$locale') as angular.ILocaleService
  $location = $i.get('$location') as angular.ILocationService
  $log = $i.get('$log') as angular.ILogService
  $parse = $i.get('$parse') as angular.IParseService
  $q = $i.get('$q') as angular.IQService
  $rootElement = $i.get('$rootElement') as angular.IRootElementService
  $rootScope = $i.get('$rootScope') as angular.IRootScopeService
  $sce = $i.get('$sce') as angular.ISCEService
  $sceDelegate = $i.get('$sceDelegate') as angular.ISCEDelegateService
  $templateCache = $i.get('$templateCache') as angular.ITemplateCacheService
  $templateRequest = $i.get('$templateRequest') as angular.ITemplateRequestService
  $timeout = $i.get('$timeout') as angular.ITimeoutService
  $window = $i.get('$window') as angular.IWindowService
  $xhrFactory = $i.get('$xhrFactory') as angular.IXhrFactory<any>
}])
bootstrap('bcherny/ngimport')
