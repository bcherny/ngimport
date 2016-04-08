# ngimport [![Circle CI](https://circleci.com/gh/bcherny/ngimport/tree/master.svg?style=svg)](https://circleci.com/gh/bcherny/ngimport/tree/master)

> Finally, imports for Angular 1 builtins!

**docs and tests coming soon...**

## Example

With ngimport:

```ts
// Contents of Get.ts:

import {IPromise} from 'angular'
import {$http, $log} from 'ngimport'

export function Get (url: string): IPromise<string> {
  return $http.get(url).then(data => {
    $log.info('Got data!', data)
    return data
  })
}

// Contents of MyComponent.ts:

import {Get} from './Get'

angular.component('MyComponent', {
  controller: class MyComponentController {
    get() {
      Get('/foo').then(data => ...)
    }
  }
})
```

Without ngimport:

```ts
// Contents of Get.ts:

import {IHttpService, ILogService, IPromise} from 'angular'

angular.factory('Get', function(
  $http: IHttpService,
  $log: ILogService
) {
  return function (url: string): IPromise<string> {
    return $http.get(url).then(data => {
      $log.info('Got data!', data)
      return data
    })
  }
})

export interface Get {
  (url: string): IPromise<string>
}

// Contents of MyComponent.ts:

import {Get} from './Get'

angular.component('MyComponent', {
  controller: class MyComponentController {
    constructor (private Get: Get) {},
    get() {
      this.Get('/foo').then(data => ...)
    }
  }
})
```

## Why?

TODO

## Upsides of this approach

- No more ugly, proprietary DI! Use standard imports
- No lock in: easy migration path to Angular2, React, etc.
- Use constructors like they should be used
- Avoid duplicate interface declarations
- Mock Angular dependencies with `$provide` in your unit tests as usual
- Assert against HTTP requests with `$httpBackend` in your unit tests as usual
- Use it as an adapter to migrate your codebase to imports piece by piece

## Limitations of this approach

- All imported references must be executed by Angular *after* they are resolved in their respective exports. So for example, the following will not work:

   ```ts
   # bad
   import {$http} from 'ngimport'
   $http.get('/url') // FAIL! $http is not yet resolved
   
   # good
   import {$http} from 'ngimport'
   export function get() { return $http.get('/url') }
   ```

### Specifically when using just the builtin imports included in this library

TODO

### Specifically when using this technique to wrap your own legacy modules

- If transpiling to CommonJS, be careful to destructure the import rather than importing a default value. Otherwise when the exported reference updates, your consumer will still have a pointer to the old, undefined reference!

TODO

## License

MIT

## Running the tests

TODO

## Todo

- Add support for $animate, $animateCss, $aria, $cookies, $provide, $resource, $rootRouter, $route, $routeParams, $routerRootComponent, $sanitize, $swipe, $touch
