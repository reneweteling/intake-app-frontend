var gulp    = require('gulp'),
sass        = require('gulp-sass'),
browserify  = require('gulp-browserify'),
reactify    = require('reactify'),
sourcemaps  = require('gulp-sourcemaps'),
livereload  = require('gulp-livereload');

livereload({ start: true })

gulp.task('scripts', function() {
  gulp.src('src/js/main.js')
  .pipe(sourcemaps.init())
  .pipe(browserify({
    insertGlobals: false,
    debug: true,
    transform: [reactify]
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./dist/assets/js'))
  .pipe(livereload());
});

gulp.task('sass', function () {
  gulp.src('src/sass/app.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/assets/style'))
    .pipe(livereload());
});

gulp.task('copy', function(){
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
  gulp.src('src/assets/**/*.*')
    .pipe(gulp.dest('dist/assets'))
})

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['src/**/*.js', 'src/**/*.jsx'],   [ 'scripts' ]);
  gulp.watch(['src/**/*.sass'],                 [ 'sass' ] );
});

gulp.task('default', [ 'scripts' ,'sass', 'copy', 'watch' ]);