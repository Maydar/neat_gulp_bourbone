var gulp = require('gulp'),
    sass = require('gulp-sass'),
    neat = require('node-neat').includePaths,
    browserSync = require('browser-sync');


var paths = {
    scss: './scss/*.scss'
};

gulp.task('styles', function () {
    return gulp.src(paths.scss)
        .pipe(sass({
            includePaths: ['styles'].concat(neat)
        }))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server:  "./"
    });


    gulp.watch(paths.scss, ['styles']);
    gulp.watch(['./*.html', './css/*.css']).on('change', browserSync.reload);

});


gulp.task('default', function () {
    gulp.start('styles');
});

