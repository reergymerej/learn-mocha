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
        // do some assertions
        done();
    });

    it('is a pending test case');
});

describe('some other tests', function () {
    it('is super awesome', function () {

    });
});
