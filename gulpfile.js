const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const watch = require("gulp-watch");

gulp.task("styles", () => {
  return gulp
    .src("assets/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./assets/css"));
});

gulp.task("watch", () => {
  gulp.watch(["assets/scss/*.scss", "assets/scss/*/*.scss"], (done) => {
    gulp.series(["styles"])(done);
  });
});

gulp.task("default", gulp.series(["watch"]));
