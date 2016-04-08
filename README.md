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

## Limitations of this approach

TODO

## License

MIT

## Running the tests

TODO

## Todo

- Add support for $animate, $animateCss, $aria, $cookies, $provide, $resource, $rootRouter, $route, $routeParams, $routerRootComponent, $sanitize, $swipe, $touch