import { $http, $rootScope, bootstrap } from './ngimport.es2015'

// prevent double-loading angular
// TODO: map global angular to angular import in rollup config instead
const angular = window.angular

describe('ngimport', function() {
  afterEach(function() {
    $http.defaults.headers.common = {}
  })
  it('should define angular builtins immediately, before the app is bootstrapped', function() {
    angular.module('a', [])
    expect($http).toBeDefined()
    expect($http.name).toBe('$http')
    expect($rootScope.constructor.name).toBe('Scope')
    angular.bootstrap(angular.element(), ['a'])
  })
  it('should not override ngimported provider state', function() {
    angular.module('a', [])
    angular.bootstrap(angular.element(), ['a'])
    $http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w'
    angular.module('a').run(function() {
      expect($http.defaults.headers.common.Authorization).toBe('Basic YmVlcDpib29w')
    })
    angular.bootstrap(document.createElement('div'), ['a'])
  })
  it('should not share ngimported service state between ngimported and injected instances', function() {
    angular.module('a', [])
    const $injector = angular.bootstrap(document.createElement('div'), ['a'])
    $http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w'
    expect($injector.get('$http').defaults.headers.common.Authorization).toBe(undefined)
  })
  it('should not share ngimported service state between injected and ngimported instances', function() {
    angular.module('a', [])
    const $injector = angular.bootstrap(document.createElement('div'), ['a'])
    $injector.get('$http').defaults.headers.common.Authorization = 'Basic YmVlcDpib29w'
    expect($http.defaults.headers.common.Authorization).toBe(undefined)
  })
  // it('should be able to mock dependencies with $provide', function() {
  //   angular.module('a', [])
  //   const $injector = angular.bootstrap(document.createElement('div'), ['a'])
  //   angular.module('a')
  //     .constant('$http', 42)
  //   expect($injector.get('$http')).toBe(42)
  //   expect($http).toBe(42)
  // })
  // it('should be able to assert against HTTP requests with $httpBackend', inject(function ($httpBackend) {
  //   angular.module('a', [])
  //   const $injector = angular.bootstrap(document.createElement('div'), ['a'])
  //   $httpBackend.expectGET('/url').respond(null)
  //   $http.get('/url')
  //   $httpBackend.flush()
  //   $httpBackend.verifyNoOutstandingExpectation()
  //   $httpBackend.verifyNoOutstandingRequest()
  // }))
})