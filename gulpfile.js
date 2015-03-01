var gulp = require('gulp');
var typescript = require('gulp-tsc');
var karma = require('gulp-karma');

var defTSOptions = {
    target: 'ES5',
    sourcemap: true,
    emitError: false
};

function typescript_default(options) {
    options = options || {}; 
    _extends(options);
    return typescript(options);

    function _extends(obj) {
        for(var prop in defTSOptions) obj[prop] = obj[prop] || defTSOptions[prop];
    }
}

function runTests(action){
    gulp.src(['.src/*.ts','./test/*.ts'])
        .pipe(typescript_default())
        .pipe(gulp.dest('./test/'))
        .pipe(karma({
          configFile: 'karma.conf.js',
          action: action || 'run'
        }));
}

gulp.task('default', ['compile']);

gulp.task('compile', function() {
    gulp.src(['./src/*.ts']).pipe(typescript_default({
        out: './app.js',
        removeComments: true,
        mapRoot: './app.js'
    })).pipe(gulp.dest('./bin/'));
});

gulp.task('test', function() {
    runTests();
});

gulp.task('tdd', function(){
    runTests('watch');
});
