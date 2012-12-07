module.exports = function(grunt) {
	
	grunt.initConfig({
    //	pkg: '<json:package.json>',
    //	test: {
	//		files: ['test/**/*.js']
    //	},
    	lint: {
    		files: [/*'grunt.js',*/ 'lib/**/*.js', 'test/**/*.js']
    	},
    //	watch: {
    //		files: '<config:lint.files>',
    //  		tasks: 'default'
    //	},
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
        		exports: true
      		}
    	},
		server: {
		    port: 4444,
		    base: '.'
		  }
  	});
 
  // Default task.
  grunt.registerTask('default', 'lint');

};
