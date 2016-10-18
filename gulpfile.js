var gulp = require('gulp');
var browserify = require('browserify');
var header = require('gulp-header');
var rename = require('gulp-rename');
var chalk = require('chalk');
var size = require('gulp-size');
var replace = require('gulp-replace');
var _ = require('lodash');
var plumber = require('gulp-plumber');

var pkg = require('./package.json');
var reporter = 'list';
var args = require('yargs').argv;

var autoprefixOptions = {
  browsers: ['last 3 versions', '> 5%', 'Firefox > 3', 'ie >= 9']
};

var banner = [
  '/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * Author: <%= pkg.author %>',
  ' * Version: v<%= pkg.version %>',
  ' * Url: <%= pkg.homepage %>',
  ' * License(s): <% pkg.licenses.forEach(function( license, idx ){ %><%= license.type %><% if(idx !== pkg.licenses.length-1) { %>, <% } %><% }); %>',
  ' */',
  '', ''
].join('\n');

gulp.task('default', ['build']);

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var bundleConfig = {
  src: './source/lodash.js',
  outputDir: './',
  outputFile: 'lodash.js'
};

function bundle (bundler) {
  return bundler
    .bundle()
    .pipe(source(bundleConfig.src))
    .pipe(buffer())
    .pipe(rename(bundleConfig.outputFile))
    .pipe(gulp.dest(bundleConfig.outputDir));
}

gulp.task('bundle', function () {
    return bundle(browserify(bundleConfig.src, {
      standalone: 'lodash',
      debug: args.hasOwnProperty("debug")
    }));
});

// Building tasks
gulp.task('build', ['bundle'], function () {
  var fileSize = size({ title: 'lodash.js' });

  return gulp.src('./lodash.js')
    .pipe(plumber())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(fileSize)
    .pipe(gulp.dest('./'));
});

