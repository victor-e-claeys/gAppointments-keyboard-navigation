var gulp  = require('gulp'),
autoprefixer = require('gulp-autoprefixer'),
sass = require('gulp-sass'),
uglify = require('gulp-uglify');

gulp.task('sass', function() { 

    return gulp.src([
    './src/*.scss'
    ])
    .pipe(
    sass({ //https://github.com/sass/node-sass#options
        outputStyle: 'compressed'
    }).on('error', sass.logError)
    )
    .pipe(autoprefixer({ //https://github.com/postcss/autoprefixer#options
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(
        './dist'
    ));

});

gulp.task('js', function() { 

    return gulp.src([
    './src/*.js'
    ])
    .pipe(uglify())
    .pipe(gulp.dest(
    './dist'
    ));

});

gulp.task('default', ['js','sass']);