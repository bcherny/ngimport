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
export let $httpParamSerializerJQLike: angular.IHttpParamSerializer = undefined
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
export let $xhrFactory: angular.IXhrFactory<any> = undefined

// TODO: add mgMock/ngMockE2E services
export function bootstrap(
  element: string | Element | JQuery | Document,
  modules?: (string | Function | any[])[],
  config?: angular.IAngularBootstrapConfig
): angular.auto.IInjectorService {

  const $i = angular.bootstrap(element, modules, config)

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
  $httpParamSerializerJQLike = $i.get('$httpParamSerializerJQLike')
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
  $xhrFactory = $i.get('$xhrFactory')

  return $i
}