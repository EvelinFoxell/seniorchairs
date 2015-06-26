module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				src: [
					'assets/scripts/_source/jquery.*.js',
					'assets/scripts/_source/*.js'
				],
				dest: 'assets/scripts/combined.js'
			}
		},

		uglify: {
			build: {
				src: 'assets/scripts/combined.js',
				dest: 'assets/scripts/combined.min.js'
			}
		},

		imagemin: {
			images: {
				files: [{
					expand: true,
					cwd: 'assets/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'assets/'
				}],
				options: {
					cache: false,
					progressive: true
				}
			}
		},

		exec: {
			ico: 'convert _favicon.svg -define icon:auto-resize=64,48,32,16 favicon.ico',
			apple: 'convert _favicon.svg -resize 180x180 apple-touch-icon.png'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask('default', ['concat', 'uglify']);
};