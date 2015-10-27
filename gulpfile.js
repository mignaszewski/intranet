// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var less = require('gulp-less');
var watch = require('gulp-watch');

// TASKS !

// clean task
gulp.task('clean', function() {
    gulp.src('./dist/*')
      .pipe(clean({force: true}))
    gulp.src('./app/js/bundled.js')
      .pipe(clean({force: true}))
});

// *** default task *** //
gulp.task('default', function(done) {
  runSequence('clean', 'browserify', 'connect', 'compile-less', 'watch-less', 'lint', function() {
    console.log('default end.');
    done();
  });
});


// build task
gulp.task('build', function(done) {
  runSequence('clean', 'minify-css', 'browserifyDist', 'copy-html-files', 'copy-bower-components', 'connectDist', 'lint', function(){
    console.log('build end.');
    done();
  });
});


/* Task to compile less */
gulp.task('compile-less', function() {  
  gulp.src('./app/css/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./app/css/'));
});

/* Task to watch less changes */
gulp.task('watch-less', function() {  
  gulp.watch('./app/css/**/*.less' , ['compile-less']);
});



gulp.task('lint', function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('minify-css', function() {
  var opts = {comments:true,spare:true};
  gulp.src(['./app/**/*.css', '!./app/bower_components/**'])
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('minify-js', function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    .pipe(uglify({
      // inSourceMap:
      // outSourceMap: "app.js.map"
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('copy-bower-components', function () {
  gulp.src('./app/bower_components/**')
    .pipe(gulp.dest('dist/bower_components'));
});

gulp.task('copy-html-files', function () {
  gulp.src('./app/**/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    port: 8888
  });
});

gulp.task('connectDist', function () {
  connect.server({
    root: 'dist/',
    port: 9999
  });
});

gulp.task('browserify', function() {
  gulp.src(['app/js/main.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: true
  }))
  .pipe(concat('bundled.js'))
  .pipe(gulp.dest('./app/js'))
});

gulp.task('browserifyDist', function() {
  gulp.src(['app/js/main.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: true
  }))
  .pipe(concat('bundled.js'))
  .pipe(gulp.dest('./dist/js'))
});
