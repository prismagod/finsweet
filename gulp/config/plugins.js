import replace from "gulp-replace"; // search and replace
import plumber from "gulp-plumber"; // error processing
import notify from "gulp-notify"; // notifier
import browsersync from "browser-sync"; // live server
import newer from "gulp-newer"; // check image updates
import ifPlugin from "gulp-if"; // branches

export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	browsersync: browsersync,
	newer: newer,
	if: ifPlugin
}