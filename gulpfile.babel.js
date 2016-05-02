import gulp from 'gulp';
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';
import nodemon from 'gulp-nodemon';
import uglify from 'gulp-uglify';

const babelify = (source) => {
  gulp.src([`${source}/**/*`])
		.pipe(plumber())
		.pipe(babel())
    .pipe(uglify())
		.pipe(gulp.dest(`dist/${source}`));
};

gulp.task('server', () => {
	babelify('server');
});

gulp.task('client', () => {
  babelify('client');
});

gulp.task('watch', () => {
	gulp.watch(['server/**/*', 'client/**/*'], ['server', 'client']);
});


gulp.task('start', () => {
	nodemon({
		script: 'dist/server/server.js',
		ext: 'js html',
	});
});

gulp.task('default', ['server', 'client', 'watch', 'start']);
