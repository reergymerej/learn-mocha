# Learn Mocha

This is a simple project to learn about [Mocha](http://visionmedia.github.io/mocha/).

## Notes

### Set Up

Start by initializing npm.

`npm init`

Walk through the steps to get a basic `package.json`.

Add mocha to the package. *Add package dependencies through the console for convenience.*  

`npm install mocha --save-dev`

This adds it to package.json under "devDependencies".

Set up an npm script in package.json to test using the installed Mocha.

    "scripts": {
        "test": "node_modules/.bin/mocha"
    },

Add `test/test.js` to your project.  This is where Mocha looks for tests by default.

Now, running this from the console will execute the test cases in `test/test.js`.

    npm test

### Writing Tests

This has just wired up Mocha so far, which is the testing framework.  The test(s) need to specify an [assertion library](http://visionmedia.github.io/mocha/#assertions) to use.  You can use [Node's](http://nodejs.org/api/assert.html) or anything else that throws errors (ie. write your own).


### Asynchronous Tests

To make a test async, use the following format.

```javascript
it('should work asynchronously', function (done) {
    // do some assertions
    done();
});
```

### References

* http://www.devthought.com/2012/02/17/npm-tricks/
* http://visionmedia.github.io/mocha/#assertions