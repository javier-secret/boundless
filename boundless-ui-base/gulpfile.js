const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();
const { reload } = browserSync;

const libSrc = ['./src/vendor/**/*'];
const sassSrc = './src/base-sample-page.scss';
const imgSrc = './src/img/**/*';
const htmlSrc = './src/**/*.html';

const buildRoot = './tmp';

gulp.task('cleanCss', () => {
  return gulp.src(`${buildRoot}/css`, { read: false }).pipe(clean());
});

gulp.task('libs', () => {
  return gulp.src(libSrc).pipe(gulp.dest(`${buildRoot}/libs`));
});

gulp.task('sass', ['cleanCss'], () => {
  return gulp.src(sassSrc)
    .pipe(sass())
    .on('error', gutil.log)
    .pipe(gulp.dest(`${buildRoot}/css`))
    .pipe(browserSync.stream());
});

gulp.task('images', () => {
 return gulp.src(imgSrc).pipe(gulp.dest(`${buildRoot}/img`));
});

gulp.task('html', () => {
  return gulp.src(htmlSrc)
    .pipe(gulp.dest(buildRoot));
});

gulp.task('watch', () => {
  gulp.watch('./src/**/*.scss', ['sass']);
  gulp.watch(htmlSrc, ['html']).on("change", reload);
});

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "./tmp"
        },
        open: false,
    });
});

gulp.task('default', [
  'sass',
  'libs',
  'html',
  'images',
  'watch',
  'browser-sync'
]);
