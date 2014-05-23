var mocha = require('mocha'),
    assert = mocha.assert;

describe('some test', function(){
    it('should be awesome', function(){
        assert.equal('awesome', 'awesome');
    });
});