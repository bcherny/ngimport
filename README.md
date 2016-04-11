# ngimport [![Circle CI](https://circleci.com/gh/bcherny/ngimport/tree/master.svg?style=svg)](https://circleci.com/gh/bcherny/ngimport/tree/master)

> A saner alternative to Angular 1 dependency injection

**docs and tests coming soon...**

## Example

### Before:

```ts
import {IHttpService, ILogService, IPromise} from 'angular'

angular.factory('Get', function($http: IHttpService, $log: ILogService) {
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
```

### After:

```ts
import {IPromise} from 'angular'
import {$http, $log} from 'ngimport'

export function Get (url: string): IPromise<string> {
  return $http.get(url).then(data => {
    $log.info('Got data!', data)
    return data
  })
}
```

## Full Example

### Before:

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

### After:

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

## Why?

Angular 1 DI made sense when there was no JavaScript module standard. But with the advent of CommonJS, and now ES Modules, Angular DI only serves to make your code less portable.

If you add TypeScript to the mix, you'll often find yourself repeating class interface definitions; you might create a typed service class, but because its dependencies are injected via a closure, you can't export the class directly, and instead need to create a second interface and export it instead! And if you use the class' constructor to inject dependencies, then you can't pass arguments to a new instance of your constructor!

With the *ngimport* approach, all of these issues are solved.

But the biggest benefit is your code becomes much more **portable**: you can mix and match Angular 1, Angular 2, or even React components with zero friction. And if you're using TypeScript, you can do all of this in a 100% typesafe way.

### Upsides of this approach

- No more ugly, proprietary DI! Use standard imports
- No lock in: easy migration path to Angular2, React, etc.
- Use constructors to pass in arguments, rather than for DI
- Avoid duplicated TypeScript interface declarations
- Mock Angular dependencies with `$provide` in your unit tests, as usual
- Assert against HTTP requests with `$httpBackend` in your unit tests, as usual
- Use it as an adapter to migrate your codebase to imports piece by piece

### Limitations when using this technique to wrap your own legacy modules

- If transpiling to CommonJS, be careful to destructure the import rather than importing a default value. Otherwise when the exported reference updates, your consumer will still have a pointer to the old, undefined reference!

## Backporting existing code

TODO

TODO

## License

MIT

## Running the tests

TODO

## Todo

- Add support for $animate, $animateCss, $aria, $cookies, $provide, $resource, $rootRouter, $route, $routeParams, $routerRootComponent, $sanitize, $swipe, $touch
