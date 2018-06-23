module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8080,
          base: "./"
        }
      }
    },
    sass: {
      dist: {
        // Target
        files: [
          {
            expand: true,
            cwd: "./src/sass/",
            src: ["*.sass"],
            dest: "./dist/css/",
            ext: ".css"
          }
        ]
      }
    },
    watch: {
      styles: {
        options: {
          livereload: true,
          spawn: false,
          event: ["added", "deleted", "changed"]
        },
        files: ["**/*.sass"],
        tasks: ["sass"]
      },
      images: {
        files: ["src/img/**"],
        tasks: ["copy:main"],
        options: {
          spawn: false
        }
      }
    },
    copy: {
      main: {
        files: [
          // makes all src relative to cwd
          { expand: true, cwd: "src/", src: ["img/**"], dest: "dist/" }
        ]
      }
    }
  });
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-copy");

  grunt.registerTask("default", [
    "connect:server",
    "copy:main",
    "sass",
    "watch"
  ]);
};
