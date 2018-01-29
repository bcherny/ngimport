# ngimport [![Build Status][build]](https://circleci.com/gh/bcherny/ngimport) [![npm]](https://www.npmjs.com/package/ngimport) [![mit]](https://opensource.org/licenses/MIT)

[build]: https://img.shields.io/circleci/project/bcherny/ngimport.svg?branch=master&style=flat-square
[npm]: https://img.shields.io/npm/v/ngimport.svg?style=flat-square
[mit]: https://img.shields.io/npm/l/ngimport.svg?style=flat-square

> ES6 imports for $http, $log, and other Angular 1 services

## Install

```sh
# Using Yarn:
yarn add ngimport angular

# Or, using NPM:
npm install ngimport angular --save
```

## Example

*Note: This example is in TypeScript, but it works equally well in plain JavaScript.*

### Before:

```ts
import {IHttpService, ILogService, IPromise} from 'angular'

angular.factory('Get', function($http: IHttpService, $log: ILogService) {
  return function(url: string): IPromise<string> {
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

export function Get(url: string): IPromise<string> {
  return $http.get(url).then(data => {
    $log.info('Got data!', data)
    return data
  })
}
```

## Full Example

### Before:

```ts
angular.module('myModule', [])

// Contents of Get.ts:

import {IHttpService, ILogService, IPromise} from 'angular'

angular.module('myModule').factory('Get', function(
  $http: IHttpService,
  $log: ILogService
) {
  return function(url: string): IPromise<string> {
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

angular.module('myModule').component('MyComponent', {
  controller: class MyComponentController {
    constructor(private Get: Get) {},
    get() {
      this.Get('/foo').then(data => ...)
    }
  }
})
```

### After:

```ts
angular.module('myModule', ['bcherny/ngimport'])

// Contents of Get.ts:

import {IPromise} from 'angular'
import {$http, $log} from 'ngimport'

export function Get(url: string): IPromise<string> {
  return $http.get(url).then(data => {
    $log.info('Got data!', data)
    return data
  })
}

// Contents of MyComponent.ts:

import {Get} from './Get'

angular.module('myModule').component('MyComponent', {
  controller: class MyComponentController {
    get() {
      Get('/foo').then(data => ...)
    }
  }
})
```

## Why?

Angular 1 DI made sense when there was no JavaScript module standard. But with the advent of CommonJS, and now ES Modules, Angular DI only makes your code less portable.

If you add TypeScript to the mix, you'll often find yourself repeating class interface definitions: you might create a typed service class, but because its dependencies are injected via a closure, you can't export the class directly, and instead need to create a second interface and export it instead! And if you use the class' constructor to inject dependencies, then you can't pass arguments to a new instance of your constructor!

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

## Using this technique to wrap your own legacy modules

You can easily use the same technique that *ngimport* uses to expose your own, legacy Angular 1 modules via ES6 `import`s. Let's say you have the following code:

```js
// Contents of myModule.js:

angular
  .module('myModule', [])
  .service('fooService', function($http) {
    this.foo = function() {
      return $http.get('/url')
    }
  })
```

To consume `fooService` today, you need to DI it; instead, let's expose it and its typings so we can `import` it:

```ts
// Contents of fooService.ts:

import {IPromise, module} from 'angular'
export let fooService = undefined

interface FooService {
  foo: () => IPromise<{ data: string }>
}

module('myModule').run(function ($injector) {
  fooService = <FooService>$injector.get('fooService')
})
```

Voila! Now instead of DIing `fooService`, we can now simply write `import {fooService} from './fooService'`. We then have the freedom to migrate `fooService` to TypeScript/ES6 at our own pace.

### Limitations

- Angular builtins (`$http`, `$rootScope`) will be undefined until you bootstrap your app. This is due to the way Angular creates injectors. Be careful to either not use these builtins at the top level, or bootstrap the app before you do.
- If transpiling to CommonJS, be careful to destructure the import rather than importing a default value. Otherwise when the exported reference updates, your consumer will still have a pointer to the old, undefined reference.

## License

MIT

## Running the tests

`npm test`

## Todo

- Add support for $animate, $animateCss, $aria, $cookies, $provide, $resource, $rootRouter, $route, $routeParams, $routerRootComponent, $sanitize, $swipe, $touch
