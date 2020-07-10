module.exports = function (grunt) {

    const sass = require('node-sass');

    require('jit-grunt')(grunt);
	grunt.loadNpmTasks('grunt-banner');
	
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        customs: grunt.file.readJSON('gruntfile_config.custom.json'),
		
		meta: {
            copyright: 'Copyright (c) 2019-<%= grunt.template.today("yyyy") %>',
            banner: '\n' +
                ' * <%= pkg.name %>\n' +
                ' * Version: <%= pkg.version %>\n' +
                ' * \n' +
                ' * <%= meta.copyright %>\n' +
                ' * by <%= pkg.author.name %>\n' +
                ' * \n' +
                ' * Street: <%= pkg.author.street %>\n' +
                ' * City: <%= pkg.author.city %>\n' +
                ' * Mail: <<%= pkg.author.email %>>\n' +
                ' * \n' +
                ' * Licensed under the <%= pkg.license %> License.\n'
        },
		usebanner: {
            production: {
                options: {
                    position: 'top',
                    banner: '/* \n * <%= meta.banner %>*/\n',
                    linebreak: true
                },
                files: {
                    src: [ 'dist/css/main.css' ]
                }
            }
        },
        sass: {
            options: {
                implementation: sass,
                sourceMapEmbed: true,
                sourceMapRoot: "/"
            },
            development: {
                files: {  // Dictionary of files
                    'css/main.css': 'scss/main.scss',
                }
            },
            production: {
                files: {  // Dictionary of files
                    'dist/css/main.css': 'scss/main.scss', 
                }
            }
        },
        postcss: {
            development: {
                options: {
                    map: {
                        inline: true
                    },
                    processors: [
                        require('autoprefixer')({
                            grid: true,
                            browsers: ['last 2 versions', 'ie 6-8', 'Firefox > 20']
                        })
                    ]
                },
                src: 'css/*.css'
            },
            production: {
                options: {
                    processors: [
                        require('autoprefixer')({
                            grid: true,
                            browsers: ['last 2 versions', 'ie 6-8', 'Firefox > 20']
                        })
                        ,require('cssnano')({
                            preset: 'default'
                        })
                    ]
                },
                src: 'dist/css/*.css'
            }
        },
        copy: {
            production: {
                files: [
                    {
                        src: '*.html',
                        dest: 'dist/',
                        expand: true
                    },
                ]
            }
        },
        clean:{
            production: {
                src: ['dist/*']
            }
        },
        watch: {
            sass_styles: {
                files: ['scss/**/*.scss'], // which files to watch
                tasks: ['sass:development', 'postcss:development'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask('dev', ['sass:development', 'postcss:development', 'watch']);
    grunt.registerTask('build', ['clean:production', 'sass:production', 'postcss:production', 'usebanner:production', 'copy:production'] );
    grunt.registerTask('default', ['dev']);
};