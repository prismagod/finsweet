// main module
import gulp from "gulp";

// path import
import { path } from "./gulp/config/path.js";

// import to global var
global.app = {
	path: path,
	gulp: gulp
}

// import tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";

// watcher
function watcher() {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(copy, html);

// scenario builder
const dev = gulp.series(reset, mainTasks, watcher);

// default scenario
gulp.task('default', dev);