'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'
// templateFramework: 'lodash'

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            options: {
                nospawn: true
            },
            coffee: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
                tasks: ['coffee:dist']
            },
            coffeeTest: {
                files: ['test/spec/{,*/}*.coffee'],
                tasks: ['coffee:test']
            },
            compass: {
                files: ['<%= yeoman.app %>/resource/scss/{,*/}*.{scss,sass}'],
                tasks: ['compass']
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= yeoman.app %>/*.html',
                    '{.tmp,<%= yeoman.app %>}/public/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/public/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/public/images/{,*/}*.{png,jpg,jpeg,gif,webp}'
                ]
            },
            handlebars: {
                files: ['<%= yeoman.app %>/resource/templates/*.hbs'],
                tasks: ['handlebars:compile']
            },
            handlebarsHelper: {
                files: ['<%= yeoman.app %>/resource/templates/helpers/*.js', '.tmp/{,*/}*.js'],
                tasks: ['concat:template', 'wrap:template']
            },
            markdown: {
                files: ['<%= yeoman.app %>/_post/*.md'],
                tasks: ['markdown','handlebars:markdown', 'concat:template', 'wrap:template']
            }
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, yeomanConfig.dist)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: ['.tmp', '<%= yeoman.dist %>/*', '.build'],
            server: ['app/public/styles/scss', 'app/public/scripts/templates']
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        mocha: {
            all: {
                src: ['test/index.html'],
                options: {
                    run: true,
                    bail: true,
                    log: true
                },

                reporter: 'Nyan'
            }
        },
        coffee: {
            dist: {
                files: [{
                    // rather than compiling multiple files here you should
                    // require them into your main .coffee file
                    expand: true,
                    cwd: '<%= yeoman.app %>/scripts',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/scripts',
                    ext: '.js'
                }]
            },
            test: {
                files: [{
                    expand: true,
                    cwd: '.tmp/spec',
                    src: '*.coffee',
                    dest: 'test/spec'
                }]
            }
        },
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/resource/scss',
                cssDir: 'app/public/styles/scss',
                imagesDir: '<%= yeoman.app %>/public/images',
                javascriptsDir: '<%= yeoman.app %>/public//scripts',
                fontsDir: '<%= yeoman.app %>/public/styles/fonts',
                importPath: [
                    '<%= yeoman.app %>/public/bower_components',
                    '<%= yeoman.app %>/public/bower_components/foundation/scss',
                    '<%= yeoman.app %>/public/bower_components/animate.scss/source'
                ],
                relativeAssets: true
            },
            dist: {},
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/public/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= yeoman.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/public/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/public/images'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/public/styles/main.css': [
                        '.tmp/styles/{,*/}*.css',
                        '<%= yeoman.app %>/public/styles/main.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}'
                    ]
                }]
            },
            seajs: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'app/public/scripts',
                        src: ['sea-modules/**', 'config.js'],
                        dest: 'dist/public/scripts'
                    }
                ]
            }
        },
        bower: {
            all: {
                rjsConfig: '<%= yeoman.app %>/public/scripts/main.js'
            }
        },
        jst: {
            options: {
                amd: true
            },
            compile: {
                files: {
                    '.tmp/scripts/templates.js': ['<%= yeoman.app %>/scripts/templates/*.ejs']
                }
            }
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/public/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/public/styles/{,*/}*.css',
                        '<%= yeoman.dist %>/public/styles/fonts/*'
                    ]
                }
            }
        },
        handlebars: {
            compile: {
                options: {
                    namespace: "Handlebars.templates",
                    processName: function (filename) {
                        return filename
                            .replace(/app\/resource\/templates\//, '')
                            .replace(/\.hbs$/, '');
                    }
                },
                files: {
                    '.tmp/templates/template.js': ['<%= yeoman.app %>/resource/templates/*.hbs']
                }
            },
            markdown: {
                options: {
                    namespace: "Handlebars.templates.markdown",
                    processName: function (filename){
                        return filename.
                            replace(/app\/resource\/post\//,'').
                            replace(/\.hbs/,'');
                    }
                },
                files: {
                    '.tmp/templates/markdown.js': ['<%= yeoman.app %>/resource/post/*.hbs']
                }
            }
        },
        markdown: {
            all: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>/_post',
                        src: '*.md',
                        dest: 'app/resource/post/',
                        ext: '.hbs'
                    }
                ],
                options: {
                    template: 'app/_post/template-insert.tpl',
                    markdownOptions: {
                        gfm: true,
                        highlight: 'manual',
                        codeLines: {
                            before: '<span>',
                            after: '</span>'
                        }
                    }
                }
            }
        },
        casper : {
            options : {
                test : true,
                'log-level' : 'warning'
            },
            yourTask : {
                src: ['test/spec/*.js'],
                dest : function(input) {
                    return input.replace(/\.js$/,'.xml').replace(/^test\/spec/, 'test/log');
                }
            }
        },
        wrap: {
            template:{
                src: ['.tmp/*.js'],
                dest: '<%= yeoman.app %>/public/scripts/example/templates/template.js',
                options: {
                    wrapper: ["define(function(require){ var Handlebars = window.Handlebars || require('willkan/handlebars/1.0.0/handlebars.runtime');\n",
                              "\nreturn Handlebars.templates; \n});"
                    ]
                }
            }
        },
        concat: {
            template: {
                options:{
                    noncmd: true
                },
                files: {
                    '.tmp/template.js': [
                        '<%= yeoman.app %>/resource/templates/helpers/{,*/}*.js',
                        '.tmp/templates/*.js'
                    ]
                }
            },
            seajs: {
                options: {
                    relative: true,
                    include: 'all',
                    paths: [
                        'app/public/scripts/sea-modules',
                        'app/public/scripts/example/static',
                        '.build'
                    ]
                },
                files: {
                    'dist/public/scripts/main.js': ['.build/{,*/,*/*/}*.js']
                }
            }
        },
        transport: {
            options: {
                debug: false,
                alias: {
                    $: '$',
                    underscore: 'underscore',
                    backbone: 'backbone'
                },
                paths: [
                    'app/public/scripts/sea-modules'
                ]
            },
            seajs: {
                options: {
                    alias: {
                        underscore: 'underscore',
                        backbone: 'backbone',
                        $: '$',
                        modernizr: 'modernizr'
                    },
                    paths: [
                        'app/public/scripts/example/static',
                        '.build'
                    ]
                },
                files: [
                    {
                        cwd: 'app/public/scripts/example',
                        src: [
                            'static/{,*/,*/*/}*.js',
                            'templates/*.js',
                            'utils/*.js',
                            'logic/*.js'
                        ],
                        dest: '.build'
                    }
                ]
            }
        },
        uglify: {
            seajs: {
                files: {
                    'dist/public/scripts/main.js': 'dist/public/scripts/main.js'
                }
            }
        }
    });

    grunt.registerTask('createDefaultTemplate', function () {
        grunt.file.write('.tmp/scripts/templates.js', 'this.JST = this.JST || {};');
    });

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'coffee:dist',
            'compass:server',
            'markdown',
            'handlebars:markdown',
            'handlebars:compile',
            'concat:template',
            'wrap:template',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        //'clean:server',
        //'compass',
        //'connect:test',
        //'mocha'
        'casper'
    ]);

    grunt.registerTask('sea', [
        'transport:seajs',
        'concat:seajs'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'coffee',
        'compass:dist',
        'markdown',
        'handlebars:markdown',
        'handlebars:compile',
        'concat:template',
        'wrap:template',
        'transport:seajs',
        'concat:seajs',
        'uglify:seajs',
        'useminPrepare',
        'imagemin',
        'htmlmin',
        'cssmin',
        'copy',
        'rev',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
