module.exports = function (grunt) {

    // load the task
    grunt.loadNpmTasks("grunt-ts");

    // Configure grunt here
    grunt.initConfig({
        ts: {
            dev: {                          // a particular target
                src: ["typescript/**/*.ts"], // The source typescript files, http://gruntjs.com/configuring-tasks#files
                reference: "./typescript/reference.ts",  // If specified, generate this file that you can use for your reference management
                watch: 'typescript',

                out: 'app/out.js',
            },
        }
    });

    grunt.registerTask("default", ["ts:dev"]);
}