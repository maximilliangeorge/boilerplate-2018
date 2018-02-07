const gulp = require('gulp')
const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')
const browserSync = require('browser-sync').create()
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')
const uglify = require('gulp-uglify')
const buffer = require('vinyl-buffer')
const pump = require('pump')

// Static server

gulp.task('serve', ['sass'], function() {

		browserSync.init({
				server: {
						baseDir: './'
				}
		});

    gulp.watch('./src/sass/**/*.scss', ['sass'])
    gulp.watch('./src/js/script.js', ['script-js'])
		gulp.watch('./src/js/vendor.js', ['vendor-js'])
		gulp.watch('./build/js/vendor.js').on('change', browserSync.reload)
    gulp.watch('./build/js/script.js').on('change', browserSync.reload)
    gulp.watch('./*.html').on('change', browserSync.reload)
		gulp.watch('./*.php').on('change', browserSync.reload)
    gulp.watch('./**/*.html').on('change', browserSync.reload)

})

// SCSS

let sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
}

gulp.task('sass', function(callback) {

	pump([
		gulp.src('./src/sass/**/*.scss'),
		sourcemaps.init(),
		sass(sassOptions).on('error', sass.logError),
		autoprefixer(),
		cleanCSS({debug: true}, function(details) {
			console.log(details.name + ': ' + details.stats.originalSize)
			console.log(details.name + ': ' + details.stats.minifiedSize)
		}),
		sourcemaps.write(),
		gulp.dest('./build/css'),
		browserSync.stream()
	], callback)

})

// JS

gulp.task('script-js', function(callback) {

	pump([
		browserify({
			entries: ['./src/js/script.js'],
			debug: true
		})
		.transform(babelify.configure({
			presets: ['es2015']
		}))
		.bundle(),
		source('script.js'),
		buffer(),
		sourcemaps.init({ loadMaps: true }),
		uglify({
			compressor: {
				drop_debugger: false
			}
		}),
		sourcemaps.write('./'),
		gulp.dest('./build/js')
	], callback)

})

gulp.task('vendor-js', function(callback) {

	pump([
		browserify({
			entries: ['./src/js/vendor.js'],
			debug: true
		})
		.transform(babelify.configure({
			presets: ['es2015']
		}))
		.bundle(),
		source('vendor.js'),
		buffer(),
		sourcemaps.init({ loadMaps: true }),
		uglify({
			compressor: {
				drop_debugger: false
			}
		}),
		sourcemaps.write('./'),
		gulp.dest('./build/js')
	], callback)

})

gulp.task('default', ['serve'])
