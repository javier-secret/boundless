const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();
const { reload } = browserSync;

const sassSrc = './src/**/*.scss';
const htmlSrc = './src/**/*.html';

const buildRoot = './tmp';

gulp.task('cleanCss', () => {
  return gulp.src(`${buildRoot}/css`, { read: false }).pipe(clean());
});

gulp.task('sass', () => {
  gulp.src(sassSrc)
    .pipe(sass())
    .on('error', gutil.log)
    .pipe(gulp.dest(`${buildRoot}/css`))
    .pipe(browserSync.stream());
});

gulp.task('html', () => {
  gulp.src(htmlSrc)
    .pipe(gulp.dest(buildRoot));
});

gulp.task('watch', () => {
  gulp.watch(sassSrc, ['cleanCss', 'sass']);
  gulp.watch(htmlSrc, ['html']).on("change", reload);
});


gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "./tmp"
        }
    });
});

gulp.task('default', ['cleanCss', 'sass', 'html', 'watch', 'browser-sync']);


// On scss file save, compile and write the compile css to .tmp
// on html file save, copy all html files to the .tmp directory