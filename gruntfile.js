'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		project: {
			dist: ['app'],
			base: ['src'],
            jquery: ['node_modules/jquery'],
			bootstrap: ['node_modules/bootstrap-sass/assets']
		},

        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        'js/*.js',
                        '*.html'
                    ]
                },

                options: {
                    watchTask: true,

                    server: {
                        baseDir: './<%= project.dist %>/'
                    }
                }
            }
        },

		sass: {
		    dev: {
                files: [{
                    expand: true,
                    cwd: './<%= project.base %>/sass',
                    src: ['**/*.scss'],
                    dest: './<%= project.base %>/css',
                    ext: '.css'
                }]
		    }
		},

        sync: {
            main: {
                files: [
                    {
                        cwd: '.',
                        src: ['*.{html, html}'],
                        dest: './<%= project.dist %>/'
                    },

                    {
                        expand: true,
                        cwd: '<%= project.base %>/img',
                        src: ['**/*'],
                        dest: '<%= project.dist %>/img' 
                    },

                    {
                        expand: true,
                        cwd: '<%= project.base %>/css',
                        src: ['**/*.css'],
                        dest: '<%= project.dist %>/css' 
                    },

                    {
                        expand: true,
                        cwd: '<%= project.base %>/js',
                        src: ['**/*.js'],
                        dest: '<%= project.dist %>/js' 
                    },

                    {
                        expand: false,
                        cwd: '<%= project.jquery %>/dist',
                        src: ['*'],
                        dest: '<%= project.dist %>/lib/jquery',
                        filter: 'isFile'
                    },

                    {
                        expand: true,
                        cwd: '<%= project.bootstrap %>/fonts/bootstrap', 
                        src: ['*'],
                        dest: '<%= project.dist %>/css/fonts' 
                    },

                    {
                        expand: true,
                        cwd: '<%= project.bootstrap %>/javascripts', 
                        src: ['*'],
                        dest: '<%= project.dist %>/lib/bootstrap',
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
                        cwd: '.',
                        src: ['*.{html, html}'],
                        dest: './<%= project.dist %>/'
                    },

                    {
                        expand: true,
                        cwd: './<%= project.base %>/img',
                        src: ['**/*'],
                        dest: './<%= project.dist %>/img' 
                    },

                    {
                        expand: true,
                        cwd: './<%= project.base %>/css',
                        src: ['**/*.css'],
                        dest: './<%= project.dist %>/css' 
                    },

                    {
                        expand: true,
                        cwd: './<%= project.base %>/js',
                        src: ['**/*.js'],
                        dest: '<%= project.dist %>/js' 
                    },

                    {
                        expand: true,
                        cwd: './<%= project.jquery %>/dist',
                        src: ['*'],
                        dest: './<%= project.dist %>/lib/jquery',
                        filter: 'isFile'
                    },

                    {
                        expand: true,
                        cwd: './<%= project.bootstrap %>/fonts/bootstrap', 
                        src: ['*'],
                        dest: './<%= project.dist %>/css/fonts' 
                    },

                    {
                        expand: true,
                        cwd: './<%= project.bootstrap %>/javascripts', 
                        src: ['*'],
                        dest: './<%= project.dist %>/lib/bootstrap',
                        filter: 'isFile'
                    }
                ]
            }
        },

        scsslint: {
			files: [
                './<%= project.base %>/sass/**/*.scss',
            ],

            options: {
                colorizeOutput: true
            }
        },

		watch: {
		    sass: {
                files: './<%= project.base %>/sass/**/*.scss',

                tasks: [
					'sass:dev',
					'sync'
				],

				options: {
					spawn: false
				}
		    }
		}
	});

	grunt.event.on('watch', function(action, filepath) {
		grunt.config('sync.main.files', filepath);
	});

    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-scss-lint');

    grunt.registerTask('default', [
        'browserSync',
        'watch'
    ]);

    grunt.registerTask('build', [
        'scsslint'
    ]);
};