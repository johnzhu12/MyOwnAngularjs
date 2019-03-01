module.exports = function (config) {
  config.set({
    frameworks: ['browserify', 'jasmine'],
    files: [{ pattern: 'test/**/*_spec.js', watched: true }],
    browsers: ['ChromeDebugging'], //也可以选PhantomJS
    customLaunchers: {
      ChromeDebugging: {
        base: 'Chrome',
        flags: ['--remote-debugging-port=9333']
      }
    },
    preprocessors: {
      'test/**/*.js': ['jshint', 'browserify'],
      'src/**/*.js': ['jshint', 'browserify']
    },
    browserify: {
      debug: true,
      // bundleDelay: 2000
    },
    browserNoActivityTimeout: 50000
  })
}