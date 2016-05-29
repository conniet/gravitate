module.exports = function(grunt) {
	//Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			dist: {
				options: {
					sassDir: 'assets/sass',
					cssDir: 'dist/assets/css',
					environment: 'development',
					outputStyle: 'compressed'
				}
			}
		},
		jshint: {
			files: ['assets/js/*.js','Gruntfile.js'],
			options: {
				globals: {
					jQuery: true,
					console: true,
					module: true
				}
			}
		},
		uglify: {
			build: {
				src: 'assets/js/*.js',
				dest: 'dist/assets/js/script.min.js'
			}
		},
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: 'assets/js/*.js',
				dest: 'dist/assets/js/script.min.js'
			}
		},
		copy: {
			main: {
				files: [
					// html
					{
						expand: true,
						cwd: 'assets/html/',
						src: ['**/*'],
						dest: 'dist/',
						filter: 'isFile'
					},
					// js
					{
						expand: true,
						cwd: 'assets/js/',
						src: ['*'],
						dest: 'dist/assets/js',
						filter: 'isFile'
					},
					// fonts
					{
						expand: true,
						cwd: 'assets/fonts/',
						src: ['**/*'],
						dest: 'dist/assets/fonts/',
						filter: 'isFile'
					},
					// img
					{
						expand: true,
						cwd: 'assets/img/',
						src: ['**/*'],
						dest: 'dist/assets/img/',
						filter: 'isFile'
					}
				]
			}
		},
		watch: {
			html: {
				files: ['assets/html/*.html'],
				tasks: ['copy']
			},
			css: {
				files: 'assets/sass/**/*.scss',
				tasks: ['compass', 'copy']
			},
			js: {
				files: ['assets/js/**'],
				tasks: ['concat', 'uglify'],
			},
			img: {
				files: ['assets/img/**.*'],
				tasks: ['copy']
			},
			fonts: {
				files: 'assets/fonts/*',
				tasks: ['copy']
			}
		},
		browserSync: {
			files: {
				src: [
					'assets/css/*.css',
					'assets/fonts/*',
					'assets/img/*',
					'assets/js/**',
					'**/*/html'
				],
			},
			options: {
				watchTask: true
			}
		},
	});
	//Load the Grunt plugins.
	grunt.loadNpmTasks('grunt-contrib-compass'); /*compass plugin*/
	grunt.loadNpmTasks('grunt-contrib-watch'); /*watch plugin*/
	grunt.loadNpmTasks('grunt-contrib-concat'); /*concatenate plugin - concatenate files*/
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify'); /*uglify plugin - contatenate js*/
	grunt.loadNpmTasks('grunt-contrib-copy'); /*copy plugin - copies files and folders*/
	grunt.loadNpmTasks('grunt-browser-sync'); /*sync browser to show css changes without browser refresh*/

	//Register the default tasks.
	grunt.registerTask('default',['compass','copy','concat','uglify','jshint','browserSync','watch']);
};