# angular issauth
[![Build Status](https://travis-ci.org/mkeeton/angular-issauth.svg?branch=master)](https://travis-ci.org/mkeeton/angular-issauth)
[![codecov](https://codecov.io/gh/mkeeton/angular-issauth/branch/master/graph/badge.svg)](https://codecov.io/gh/mkeeton/angular-issauth)
[![npm version](https://badge.fury.io/js/angular-issauth.svg)](http://badge.fury.io/js/angular-issauth)
[![devDependency Status](https://david-dm.org/mkeeton/angular-issauth/dev-status.svg)](https://david-dm.org/mkeeton/angular-issauth?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/mkeeton/angular-issauth.svg)](https://github.com/mkeeton/angular-issauth/issues)
[![GitHub stars](https://img.shields.io/github/stars/mkeeton/angular-issauth.svg)](https://github.com/mkeeton/angular-issauth/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/mkeeton/angular-issauth/master/LICENSE)

## Demo
https://mkeeton.github.io/angular-issauth/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

Highfield Authentication Integration Components

## Installation

Install through npm:
```
npm install --save angular-issauth
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { AngularISSauthModule } from 'angular-issauth';

@NgModule({
  imports: [
    AngularISSauthModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/mkeeton/angular-issauth/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/angular-issauth/bundles/angular-issauth.umd.js"></script>
<script>
    // everything is exported angularISSauth namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://mkeeton.github.io/angular-issauth/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
