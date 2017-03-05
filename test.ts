import { bootstrap, element as $, module } from 'angular'
import 'angular-mocks'
import { $http, $httpBackend, $log, $rootScope } from './'

describe('ngimport', () => {
  afterEach(() => {
    $http.defaults.headers.common = {}
  })
  it('should not define angular builtins before the app is bootstrapped', () => {
    const element = $()
    module('a', ['bcherny/ngimport'])
    expect($http).toBeUndefined()
    expect($rootScope).toBeUndefined()
    bootstrap(element, ['a'])
    element.remove()
  })
  it('should define angular builtins after the app is bootstrapped', () => {
    const element = $()
    module('a', ['bcherny/ngimport'])
    bootstrap(element, ['a'])
    expect($http).toBeDefined()
    expect(typeof $http.get).toBe('function')
    expect(typeof $rootScope.$id).toBe('number')
    element.remove()
  })
  it('should not override ngimported provider state', () => {
    const element = $()
    module('a', ['bcherny/ngimport'])
    bootstrap(element, ['a'])
    $http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w'
    module('a').run(() => {
      expect($http.defaults.headers.common.Authorization).toBe('Basic YmVlcDpib29w')
    })
    element.remove()
  })
  it('should share ngimported service state between ngimported and injected instances', () => {
    const element = $()
    module('a', ['bcherny/ngimport'])
    const $injector = bootstrap(element, ['a'])
    $http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w'
    expect($injector.get('$http').defaults.headers.common.Authorization).toBe('Basic YmVlcDpib29w')
    element.remove()
  })
  it('should share ngimported service state between injected and ngimported instances', () => {
    const element = $()
    module('a', ['bcherny/ngimport'])
    const $injector = bootstrap(element, ['a'])
    $injector.get('$http').defaults.headers.common.Authorization = 'Basic YmVlcDpib29w'
    expect($http.defaults.headers.common.Authorization).toBe('Basic YmVlcDpib29w')
    element.remove()
  })
  it('should be able to mock dependencies with $provide', () => {
    const element = $()
    module('a', ['bcherny/ngimport'])
      .constant('$log', 42)
    const $injector = bootstrap(element, ['a'])
    expect($injector.get('$log')).toBe(42)
    expect($log).toBe(42)
    element.remove()
  })
  it('should be able to assert against HTTP requests with $httpBackend', () => {
    const element = $()
    module('a', ['ngMock', 'bcherny/ngimport'])
    bootstrap(element, ['a'])
    $httpBackend.expectGET('/url').respond(null)
    $http.get('/url')
    $httpBackend.flush()
    $httpBackend.verifyNoOutstandingExpectation()
    $httpBackend.verifyNoOutstandingRequest()
    element.remove()
  })
})
