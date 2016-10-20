import {$http, $rootScope} from './ngimport.es6'

describe('ngimport', function() {
  it('should define angular builtins immediately', function() {
    expect($http).toBeDefined()
    expect($http.name).toBe('$http')
    expect($rootScope.constructor.name).toBe('Scope')
  })
})
