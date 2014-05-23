// var assert = require('assert');

describe('some test', function(){
    it('should be awesome', function(){
        throw new Error('not awesome');
    });

    it('should seriously work asynchronously', function (done) {
        // do nothing
        done();
    });

    it('should work asynchronously', function (done) {
        done();
    });
});