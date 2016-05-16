declare namespace angular {
  module auto {
    interface IInjectorService {
      get(a: '$anchorScroll'): angular.IAnchorScrollService
      get(a: '$cacheFactory'): angular.ICacheFactoryService
      get(a: '$compile'): angular.ICompileService
      get(a: '$controller'): angular.IControllerService
      get(a: '$document'): angular.IDocumentService
      get(a: '$exceptionHandler'): angular.IExceptionHandlerService
      get(a: '$filter'): angular.IFilterService
      get(a: '$http'): angular.IHttpService
      get(a: '$httpBackend'): angular.IHttpBackendService
      get(a: '$httpParamSerializer'): angular.IHttpParamSerializer
      get(a: '$httpParamSerializerJQLike'): angular.IHttpParamSerializer
      get(a: '$interpolate'): angular.IInterpolateService
      get(a: '$interval'): angular.IIntervalService
      get(a: '$locale'): angular.ILocaleService
      get(a: '$location'): angular.ILocationService
      get(a: '$log'): angular.ILogService
      get(a: '$parse'): angular.IParseService
      get(a: '$q'): angular.IQService
      get(a: '$rootElement'): angular.IRootElementService
      get(a: '$rootScope'): angular.IRootScopeService
      get(a: '$sce'): angular.ISCEService
      get(a: '$sceDelegate'): angular.ISCEDelegateService
      get(a: '$templateCache'): angular.ITemplateCacheService
      get(a: '$templateRequest'): angular.ITemplateRequestService
      get(a: '$timeout'): angular.ITimeoutService
      get(a: '$window'): angular.IWindowService
      get<T>(a: '$xhrFactory'): angular.IXhrFactory<T>
    }
  }
}