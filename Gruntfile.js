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
			apple: 'rsvg-convert -w 144 -h 144 _favicon.svg -o apple-touch-icon.png',
			favicon: 'mkdir .temp \n\
				rsvg-convert _favicon.svg -o .temp/favicon16.png \n\
				rsvg-convert -w 32 -h 32 _favicon.svg -o .temp/favicon32.png \n\
				rsvg-convert -w 48 -h 48 _favicon.svg -o .temp/favicon48.png \n\
				rsvg-convert -w 64 -h 64 _favicon.svg -o .temp/favicon64.png \n\
				convert .temp/*.png favicon.ico \n\
				rm -R .temp',
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask('default', ['concat', 'uglify']);
};