var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browserSync',['css'], function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
	gulp.watch('src/css/*css',['css']);
	gulp.watch('src/*html').on('change',browserSync.reload);
});

gulp.task('css',function(){
	gulp.src(['src/css/*css'])
	.pipe(gulp.dest('src/dest/'))
	.pipe(browserSync.reload({
		stream: true
	}))
	
})
gulp.task('default',['browserSync']);