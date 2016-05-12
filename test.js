import {$http, $rootScope, lift} from './ngimport.es6'
// import {$httpBackend} from 'ngimport-mocks'

describe('ngimport', function() {
  afterEach(function() {
    $http.defaults.headers.common = {}
  })
  it('should define angular builtins immediately, before the app is bootstrapped', function() {
    expect($http).toBeDefined()
    expect($http.name).toBe('$http')
    expect($rootScope.constructor.name).toBe('Scope')
  })
  it('should not override ngimported provider state', function() {
    $http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w'
    angular
      .module('a', [])
      .run(function () {
        expect($http.defaults.headers.common.Authorization).toBe('Basic YmVlcDpib29w')
      })
    angular.bootstrap(document.createElement('div'), ['a'])
  })
  it('should share ngimported provider instance state between ngimported instances and injected instances, when using angular DI and ngimport #lift', function() {
    $http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w'
    lift(angular.module('a', []))
      .run(function ($http) {
        expect($http.defaults.headers.common.Authorization).toBe('Basic YmVlcDpib29w')
      })
    angular.bootstrap(document.createElement('div'), ['a'])
  })
  it('should not share ngimported provider instance state between ngimported instances and injected instances, when using angular DI by itself', function() {
    $http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w'
    angular
      .module('a', [])
      .run(function ($http) {
        expect($http.defaults.headers.common.Authorization).not.toBeDefined()
      })
    angular.bootstrap(document.createElement('div'), ['a'])
  })
  it('should share ngimported provider instance state between injected instances and ngimported instances, when using angular DI and ngimport #lift', function() {
    lift(angular.module('a', []))
      .run(function ($http) {
        $http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w'
      })
    expect($http.defaults.headers.common.Authorization).not.toBeDefined()
    angular.bootstrap(document.createElement('div'), ['a'])
    expect($http.defaults.headers.common.Authorization).toBe('Basic YmVlcDpib29w')
  })
  it('should not share ngimported provider instance state between injected instances and ngimported instances, when using angular DI and not using ngimport #lift', function() {
    angular
      .module('a', [])
      .run(function ($http) {
        $http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w'
      })
    expect($http.defaults.headers.common.Authorization).not.toBeDefined()
    angular.bootstrap(document.createElement('div'), ['a'])
    expect($http.defaults.headers.common.Authorization).not.toBeDefined()
  })
  it('should be able to mock dependencies with $provide', function() {
    // TODO
  })
  it('should be able to assert against HTTP requests with $httpBackend', function() {
    // $httpBackend.expectGET('/url').respond(null)
    // $http.get('/url')
    // $httpBackend.flush()
    // $httpBackend.verifyNoOutstandingExpectation()
    // $httpBackend.verifyNoOutstandingRequest()
  })
})
