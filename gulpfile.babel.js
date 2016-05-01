import gulp from 'gulp';
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';
import nodemon from 'gulp-nodemon';
import uglify from 'gulp-uglify';

gulp.task('babel', () => {
	gulp.src(['server/**/*'])
		.pipe(plumber())
		.pipe(babel())
    .pipe(uglify())
		.pipe(gulp.dest('dist/server'));
});

gulp.task('watch', () => {
	gulp.watch(['server/**/*'], ['babel']);
});


gulp.task('start', () => {
	nodemon({
		script: 'dist/server/server.js',
		ext: 'js html',
	});
});

gulp.task('default', ['babel', 'watch', 'start']);
