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

// prevent double-loading, which has the potential
// to prevent sharing state between services
let module: angular.IModule = null
try {
  module = angular.module('bcherny/ngimport')
} catch (e) {
  module = angular.module('bcherny/ngimport', [])
}

module.config(['$provide', '$httpProvider', '$logProvider', (
  $a: angular.auto.IProvideService,
  $b: angular.IHttpProvider,
  $c: angular.ILogProvider
) => {
  $provide = $a
  $httpProvider = $b
  $logProvider = $c
}])

module.run(['$injector', ($i: angular.auto.IInjectorService) => {
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

export function init(
  modules: Array<string | Function | any[]> = [],
  config: angular.IAngularBootstrapConfig & { debugInfoEnabled?: boolean} = {}
) {
  angular.bootstrap(angular.element(), modules.concat(['bcherny/ngimport']), config);
  (angular as any).bootstrap = fauxBootstrap
}

function fauxBootstrap(
  element: string | Element | JQuery | Document,
  modules?: Array<string | Function | any[]>,
  config?: angular.IAngularBootstrapConfig & { debugInfoEnabled?: boolean}
): angular.auto.IInjectorService {

  if (!angular.isObject(config)) config = {}
  element = angular.element(element)

  // let angular throw
  if (element.injector()) {
    return angular.bootstrap(element, modules, config)
  }

  const injector = exports.$injector

  module
    .constant('$rootElement', element)
    .constant('$rootScope', $rootScope)
    .constant('$compile', $compile)
    .constant('$injector', $injector)

  element.data('$injector', injector)
  $compile(element)($rootScope)

  return injector
}
