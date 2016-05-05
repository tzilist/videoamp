import gulp from 'gulp';
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';
import nodemon from 'gulp-nodemon';
import uglify from 'gulp-uglify';
import browserify from 'browserify';
import gutil from 'gulp-util';
import source from 'vinyl-source-stream';

const babelify = (folder) => (
  gulp.src([`${folder}/**/*`])
		.pipe(plumber())
		.pipe(babel())
    .pipe(uglify())
		.pipe(gulp.dest(`dist/${folder}`))
);

gulp.task('server', () => babelify('server'));

gulp.task('client', () => {
  babelify('client');
  return browserify('./dist/client/injector/adParser.js')
    .bundle()
    .on('error', e => {
      gutil.log(e);
    })
    .pipe(source('adParserBundle.js'))
    .pipe(gulp.dest('dist/client/injector'));
});

gulp.task('watch', () => {
	gulp.watch(['./server/**/*'], ['server']);
  gulp.watch(['./client/**/*'], ['client']);
});


gulp.task('start', () => {
	nodemon({
		script: 'dist/server/server.js',
		ext: 'js html',
	});
});

gulp.task('default', ['server', 'client', 'watch', 'start']);
