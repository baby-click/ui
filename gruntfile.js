'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		project: {
			base: ['src'],
            jquery: ['node_modules/jquery/'],
			bootstrap: ['node_modules/bootstrap-sass/assets/'],
			sass: ['<%= project.base %>/sass/style.scss']
		},

        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        "css/*.css",
                        "js/*.js",
                        "*.html"
                    ]
                },

                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./app/"
                    }
                }
            }
        },

		sass: {
		    dev: {
                options: {
                    style: 'expanded',
                    compass: false
                },
                files: {
                    '<%= project.base %>/css/style.css':'<%= project.sass %>'
                }
		    }
		},

        sync: {
            main: {
                files: [
                    {
                        cwd: ".",
                        src: ['*.{html, html}'],
                        dest: "app"
                    },

                    {
                        expand: true,
                        cwd: "<%= project.base %>/img",
                        src: ['**/*'],
                        dest: "app/img" 
                    },

                    {
                        expand: true,
                        cwd: "<%= project.base %>/css",
                        src: ['**/*.css'],
                        dest: "app/css" 
                    },

                    {
                        expand: true,
                        cwd: "<%= project.base %>/js",
                        src: ['**/*.js'],
                        dest: "app/js" 
                    },

                    {
                        expand: false,
                        cwd: "<%= project.jquery %>/dist",
                        src: ['*'],
                        dest: "app/lib/jquery/",
                        filter: 'isFile'
                    },

                    {
                        expand: true,
                        cwd: "<%= project.bootstrap %>/fonts/bootstrap", 
                        src: ['*'],
                        dest: "app/css/fonts/" 
                    },

                    {
                        expand: true,
                        cwd: "<%= project.bootstrap %>/javascripts", 
                        src: ['*'],
                        dest: "app/lib/bootstrap/",
                        filter: 'isFile'
                    }
                ],

                verbose: true,
                updateAndDelete: true
            }
        },

        copy: {
            main: {
                files: [
                    {
                        cwd: ".",
                        src: ['*.{html, html}'],
                        dest: "app"
                    },

                    {
                        expand: true,
                        cwd: "<%= project.base %>/img",
                        src: ['**/*'],
                        dest: "app/img" 
                    },

                    {
                        expand: true,
                        cwd: "<%= project.base %>/css",
                        src: ['**/*.css'],
                        dest: "app/css" 
                    },

                    {
                        expand: true,
                        cwd: "<%= project.base %>/js",
                        src: ['**/*.js'],
                        dest: "app/js" 
                    },

                    {
                        expand: true,
                        cwd: "<%= project.jquery %>/dist",
                        src: ['*'],
                        dest: "app/lib/jquery/",
                        filter: 'isFile'
                    },

                    {
                        expand: true,
                        cwd: "<%= project.bootstrap %>/fonts/bootstrap/**", 
                        src: ['**/*'],
                        dest: "app/css/fonts/" 
                    },

                    {
                        expand: true,
                        cwd: "<%= project.bootstrap %>/javascripts/**", 
                        src: ['**/*'],
                        dest: "app/lib/bootstrap/",
                        filter: 'isFile'
                    }
                ]
            }
        },

		watch: {
		    sass: {
                files: '<%= project.base %>/sass/{,*/}*.{scss, sass}',
                tasks: ['sass:dev']
		    }
		}
	});

    grunt.loadNpmTasks('grunt-sync');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', [
        'browserSync',
        'watch',
        'sync'
    ]);
};