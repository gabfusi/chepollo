const fs = require('fs');
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const gutil = require('gulp-util');
const gulpJsdoc2md = require('gulp-jsdoc-to-markdown');
const rename = require('gulp-rename');


gulp.task('default', () => {
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});


gulp.task('docs', function () {
    return gulp.src('src/index.js')
        .pipe(concat('README.md'))
        .pipe(gulpJsdoc2md({ template: fs.readFileSync('./readme.hbs', 'utf8') }))
        .on('error', function (err) {
            gutil.log('jsdoc2md failed:', err.message)
        })
        .pipe(gulp.dest(''))
});


/**
 * Publish on npm
 * see https://gist.github.com/coolaj86/1318304
 npm publish ./ --tag beta
 npm publish ./
 */