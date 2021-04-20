const {src, dest, watch} = require('gulp');

const sass = require('gulp-sass');
const concat = require('gulp-concat')

function convertStyles() {
  return src('app/sass/style.sass')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(concat('style.min.css'))
        .pipe(dest('app/css/'))
}

function watching() {
  watch(['app/sass/**/*.sass'], convertStyles)
}

exports.convertStyles = convertStyles
exports.watching = watching