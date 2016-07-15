'use strict';

var gulp = require('gulp'),
		sass = require('gulp-sass'),
		watch = require('gulp-watch'),
		browserSync = require('browser-sync'),
		uglify = require('gulp-uglifyjs'),
		del = require('del'),
		imagemin = require('gulp-imagemin'),
		pngquant = require('imagemin-pngquant'),
		cache =  require('gulp-cache'),
		autoprefixer =  require('gulp-autoprefixer'),
		rigger = require('gulp-rigger'),
	 	sourcemaps = require('gulp-sourcemaps'),
		reload = browserSync.reload;


gulp.task('clean', function() {
	return del.sync('app');
});


var config = {
    server: {
        baseDir: "./app"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontender"
};

gulp.task('browser-sync', function () {
    browserSync(config);
});



gulp.task('html', function () {
  return  gulp.src('src/*.html') 
        .pipe(rigger())
        .pipe(gulp.dest('app/'))
        .pipe(reload({stream: true}));
});


gulp.task('sass', function() {
  return gulp.src('src/sass/main.sass')
    .pipe(rigger())
  	.pipe(sourcemaps.init())
    .pipe(sass({
            includePaths: ['src/sass/'],
            outputStyle: 'compressed',
            sourceMap: true,
            errLogToConsole: true
        }))
    .pipe(autoprefixer(['last 15 version', '>1%', 'ie 8', 'ie 7'], {cascade: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/css/'))
    .pipe(reload({stream: true}));
});


gulp.task('scripts', function () {
  return  gulp.src('src/js/main.js') 
        .pipe(rigger()) 
        .pipe(uglify()) 
        .pipe(gulp.dest('app/js/'))
        .pipe(reload({stream: true}));
});


gulp.task('img', function() {
	return gulp.src('src/img/**/*')
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('app/img/'))
		.pipe(reload({stream: true}));
});


gulp.task('clear', function() {
	return cache.clearAll();
});


gulp.task('fonts', function() {
    gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('app/fonts/'))
});


gulp.task('build', [
    'html',
    'sass',
    'scripts',
    'img',
    'fonts'
]);


gulp.task('watch', function(){
   watch('src/**/*.html', { ignoreInitial: false }, function(event, cb) {
   	 gulp.start('html');
   });
   watch('src/sass/**/*.sass', { ignoreInitial: false }, function(event, cb) {
   	 gulp.start('sass');
   });
    watch('src/js/**/*.js', { ignoreInitial: false }, function(event, cb) {
      gulp.start('scripts');
    });
    watch('src/img/**/*.*', { ignoreInitial: false }, function(event, cb) {
      gulp.start('img'); 
    });
    watch('src/fonts/**/*.*', { ignoreInitial: false }, function(event, cb) {
      gulp.start('fonts');
    });
});

gulp.task('default', ['build', 'browser-sync', 'watch']);