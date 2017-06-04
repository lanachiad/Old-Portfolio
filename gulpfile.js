'use strict';

// Including Gulp & all of the plugins to run our workflow

var gulp = require( 'gulp' ),
    concat = require( 'gulp-concat' ),
    sass = require( 'gulp-sass' ),
    sourcemaps = require( 'gulp-sourcemaps' ),
    uglify = require( 'gulp-uglify' ),
    connect = require( 'gulp-connect' );


// Vendor Task - Minifying all vendor javascript into one
// vendor.min.js file

gulp.task( 'vendor', function () {

    return gulp.src( 'js/vendor/*.js' )
        .pipe( concat( 'vendor.min.js' ) )
        .pipe( gulp.dest( 'js' ) )
        .pipe( uglify() )
        .pipe( gulp.dest( 'js' ) )

});

// Modules Task - Minifying all modular javascript into one
// modules.min.js file

gulp.task( 'modules', function () {

    return gulp.src( 'js/modules/*.js' )
        .pipe( concat( 'modules.min.js' ) )
        .pipe( gulp.dest( 'js' ) )
        .pipe( uglify() )
        .pipe( gulp.dest( 'js' ) )

});

// Scripts Task - Minifying our scripts.js file into a
// scripts.min.js file

gulp.task( 'scripts', function () {

    return gulp.src( 'js/scripts.js' )
        .pipe( concat( 'scripts.min.js' ) )
        .pipe( gulp.dest( 'js' ) )
        .pipe( uglify() )
        .pipe( gulp.dest( 'js' ) )

});

// CSS Task - Compiling our sass files into a styles.css,
// creating a source map file, minifying our CSS and
// running the connect live reload

gulp.task( 'css', function () {

    return gulp.src( 'css/sass/*.scss' )
        .pipe( sourcemaps.init() )
        .pipe( sass( { outputStyle: 'compressed' } ) )
        .pipe( sourcemaps.write() )
        .pipe( gulp.dest( 'css' ) )
        .pipe( connect.reload() )

});

// Connect Task - Initializing the connect server that
// allows us to live reload the browser

gulp.task( 'connect', function () {

    connect.server({

        livereload: true

    });

});

// Watch Task - "Watching" for changes in our sass files
// and then running the css task when a change is detected

gulp.task( 'watch', function () {

    gulp.watch( 'css/sass/*/*.scss', [ 'css' ] );

});

// Default Task - Connecting to the connect server that
// allows for the live reload and then running the watch
// task to listen for changes. Run this task when beginning
// development

gulp.task( 'default', [

    'connect',
    'watch'

]);

// Production Task - Compiling CSS, creating the minified
// vendor file and creating the minified scripts file. Run
// this task for production

gulp.task( 'prod', [

    'css',
    'vendor',
    'modules',
    'scripts'

]);