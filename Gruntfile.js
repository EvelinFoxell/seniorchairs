module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				src: 'assets/scripts/_source/*.js',
				dest: 'assets/scripts/combined.js'
			}
		},

		uglify: {
			build: {
				src: 'assets/scripts/combined.js',
				dest: 'assets/scripts/combined.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['concat', 'uglify']);
};