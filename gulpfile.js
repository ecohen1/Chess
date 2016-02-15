var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src(['./Piece.js', './Pawn.js', './Board.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./concat/'));
});

gulp.task('xscripts', function() {
  return gulp.src(['./GameBoard.jsx', './GamePieces.jsx','render.jsx'])
    .pipe(concat('all.jsx'))
    .pipe(gulp.dest('./concat/'));
});

gulp.task('combine', function() {
  return gulp.src(['./concat/all.js', './concat/all.jsx'])
    .pipe(concat('bundle.jsx'))
    .pipe(gulp.dest('./concat/'));
});

gulp.task('scripts.watch', ['scripts','xscripts','combine'], function () {
  gulp.watch(['./*.js','./*.jsx'], ['scripts','xscripts','combine']);
});
