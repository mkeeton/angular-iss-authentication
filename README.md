# angular iss-authentication
[![Build Status](https://travis-ci.org/mkeeton/angular-iss-authentication.svg?branch=master)](https://travis-ci.org/mkeeton/angular-iss-authentication)
[![codecov](https://codecov.io/gh/mkeeton/angular-iss-authentication/branch/master/graph/badge.svg)](https://codecov.io/gh/mkeeton/angular-iss-authentication)
[![npm version](https://badge.fury.io/js/angular-iss-authentication.svg)](http://badge.fury.io/js/angular-iss-authentication)
[![devDependency Status](https://david-dm.org/mkeeton/angular-iss-authentication/dev-status.svg)](https://david-dm.org/mkeeton/angular-iss-authentication?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/mkeeton/angular-iss-authentication.svg)](https://github.com/mkeeton/angular-iss-authentication/issues)
[![GitHub stars](https://img.shields.io/github/stars/mkeeton/angular-iss-authentication.svg)](https://github.com/mkeeton/angular-iss-authentication/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/mkeeton/angular-iss-authentication/master/LICENSE)

## Demo
https://mkeeton.github.io/angular-iss-authentication/

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
npm install --save angular-iss-authentication
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { AngularISS-authenticationModule } from 'angular-iss-authentication';

@NgModule({
  imports: [
    AngularISSauthenticationModule.forRoot()
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

You may also find it useful to view the [demo source](https://github.com/mkeeton/angular-iss-authentication/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/angular-iss-authentication/bundles/angular-iss-authentication.umd.js"></script>
<script>
    // everything is exported angularISSauthentication namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://mkeeton.github.io/angular-iss-authentication/docs/

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
