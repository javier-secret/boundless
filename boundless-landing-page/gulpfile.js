const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const clean = require('gulp-clean');

const browserSync = require('browser-sync').create();
const { reload } = browserSync;

const libSrc = './node_modules/boundless-ui-base/src/vendor/**/*';
const imgSrc = './node_modules/boundless-ui-base/src/img/**/*';
const uiBaseSrc = './node_modules/boundless-ui-base/tmp/css/components-sample.css';

const sassSrc = './src/styles/main.scss';
const htmlSrc = './src/**/*.html';

const buildRoot = './tmp';

gulp.task('cleanCss', () => {
  return gulp.src(`${buildRoot}/css`, { read: false }).pipe(clean());
});

gulp.task('images', () => {
 return gulp.src(imgSrc).pipe(gulp.dest(`${buildRoot}/img`));
});

gulp.task('cssLibs', () => {
  return gulp.src(libSrc).pipe(gulp.dest(`${buildRoot}/libs`));
});

gulp.task('sass', ['cleanCss'], () => {
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
  gulp.watch('./src/**/*.scss', ['sass']);
  gulp.watch(htmlSrc, ['html']).on("change", reload);
  
  // For linked ui-lib development
  gulp.watch(uiBaseSrc, ['sass']).on('change', () => {
    console.log('Reloading due to changes in ui-base');
  });
});


gulp.task('browser-sync', ['sass'], () => {
    browserSync.init({
        server: {
            baseDir: "./tmp"
        },
    });
});

gulp.task('default', [
  'images',
  'cssLibs',
  'sass',
  'html',
  'watch',
  'browser-sync'
]);


// On scss file save, compile and write the compile css to .tmp
// on html file save, copy all html files to the .tmp directory