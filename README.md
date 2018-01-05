<p align="center">
<p>A TypeScript seed project originally generated with</p>
  <a href="http://fountainjs.io/">
    <img alt="FountainJS" src="http://fountainjs.io/assets/imgs/fountain.png" width="200">
  </a>
</p>

# Fountain Webapp Generator
[![Build Status](https://travis-ci.org/FountainJS/generator-fountain-webapp.svg?branch=master)](https://travis-ci.org/FountainJS/generator-fountain-webapp)
[![codecov](https://codecov.io/gh/FountainJS/generator-fountain-webapp/branch/master/graph/badge.svg)](https://codecov.io/gh/FountainJS/generator-fountain-webapp)
[![Slack](http://slackin.fountainjs.io/badge.svg)](http://slackin.fountainjs.io/)
[![OpenCollective Backers][backer-badge]][backer-url]
[![OpenCollective Sponsors][sponsor-badge]][sponsor-url]

### Usage

### Requirement Node 6+ && NPM 3+
This generator is targeted to be used with Node >= 6.0.0 and NPM => 3.0.0. You can check your version number with the command
```
node --version && npm --version
```

### Install

##### Install required tools
```
npm install
```

### Run
```
gulp serve
```

##### Run `yo fountain-webapp`, and select desired technologies:
```
yo fountain-webapp
```
#### Use NPM scripts

- `npm run build` to build an optimized version of your application in /dist
- `npm run serve` to launch a browser sync server on your source files
- `npm run serve:dist` to launch a server on your optimized application
- `npm run test` to launch your unit tests with Karma
- `npm run test:auto` to launch your unit tests with Karma in watch mode

#### Or Gulp tasks

If you have [`gulp-cli`](https://www.npmjs.com/package/gulp-cli) installed in global packages you can use equivalent:

- `gulp` or `gulp build`
- `gulp serve`
- `gulp serve:dist`
- `gulp test`
- `gulp test:auto`

**If you don't have [`gulp-cli`](https://www.npmjs.com/package/gulp-cli) installed in global, you should have this error:**
> /usr/local/lib/node_modules/gulp/bin/gulp.js:121
    gulpInst.start.apply(gulpInst, toRun);
TypeError: Cannot read property 'apply' of undefined

To fix, run:

- `npm install -g gulp-cli`
