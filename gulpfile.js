let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    rigger = require('gulp-rigger')
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin');


gulp.task('clean', async function(){
  del.sync('dist')
})

gulp.task('scss', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
      browsers: ['last 8 versions']
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('css', function(){
  return gulp.src([
    'node_modules/normalize.css/normalize.css',
    // 'node_modules/slick-carousel/slick/slick.css',
  ])
    .pipe(concat('_libs.scss'))
    .pipe(gulp.dest('app/scss'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function(){
  return gulp.src('app/html/*.html')
      .pipe(rigger())
      .pipe(gulp.dest('app/'))
      .pipe(browserSync.reload({stream: true}))
});

gulp.task('script', function(){
  return gulp.src('app/js/*.js')
  .pipe(browserSync.reload({stream: true}))
});
gulp.task('script2', function(){
  return gulp.src('app/js/functions/*.js')
  .pipe(concat('custom.js'))
  .pipe(gulp.dest('app/js'))
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function(){
  return gulp.src([
    'node_modules/slick-carousel/slick/slick.js'
  ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js/'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "app/"
      }
  });
});

gulp.task('export', function(){
  let buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));

  let BuildCss = gulp.src('app/css/**/*.css')
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest('dist/css'));

  let BuildJs = gulp.src('app/js/**/*.js')
    .pipe(gulp.dest('dist/js'));

  let BuildAnim = gulp.src('app/anim/*.json')
    .pipe(gulp.dest('dist/anim/'));
    
  let BuildFonts = gulp.src('app/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'));

  let BuildPhp = gulp.src('app/*.php')
    .pipe(gulp.dest('dist/'));

  let BuildHta = gulp.src('app/*.ico')
    .pipe(gulp.dest('dist/'));

  let BuildImg = gulp.src('app/img/**/*.*')
    .pipe(imagemin([
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
    ]))
    .pipe(gulp.dest('dist/img'));   
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
  gulp.watch('app/html/**/*.html', gulp.parallel('html'));
  gulp.watch('app/js/*.js', gulp.parallel('script'));
});

gulp.task('build', gulp.series('clean', 'export'));

gulp.task('default', gulp.parallel('css' ,'scss', 'js', 'script2', 'browser-sync', 'watch'));