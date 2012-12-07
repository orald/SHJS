"use strict";

module.exports = function(grunt) {
	
	grunt.initConfig({
		jasmine: {
			src : 'lib/**/*.js',
			specs : 'test/**/*.js'
		},
		watch: {
			files: ['<config:jasmine.specs>','lib/**/*js'],
			tasks: 'jasmine'
		},
		lint: {
			files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				node: true
			},
			globals: {
				jasmine : false,
				describe : false,
				beforeEach : false,
				expect : false,
				it : false,
				spyOn : false,
				SH: false
			}
		}
	});

	grunt.loadNpmTasks('grunt-jasmine-runner');
  // Default task.	
	grunt.registerTask('default', 'lint jasmine');

};
