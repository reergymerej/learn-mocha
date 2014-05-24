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

Add `test/test.js` to your project.  This is [where Mocha looks for tests](http://visionmedia.github.io/mocha/#best-practices) by default.

If no file is specified when calling mocha, all *.js files in the ./test directory will be run.  You can make it search recursively through the test dir with `--recursive`.

Now, running this from the console will execute the test cases in `./test`.

    npm test

This executes the "test" defined in [package.json's "scripts"](https://www.npmjs.org/doc/misc/npm-scripts.html).

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

If you're testing something that returns a promise, use

```javascript
it('should work asynchronously', function () {
    return stuff().should.eventually.be(true);
});
```

### Pending Test Cases

When you're not sure how to write the assertion for a test case, you can leave it out.  This will show the test as "pending" when run.

```javascript
it('is a pending test case');
```

### Only

When you just want to run one suite or test, add `only`.

```javascript
describe.only('only this suite will run', function () {
    it('should test stuff');
    it('should test other stuff');
});
```

### Specify a Reporter

You just get the dot-matrix reporter by default.  You can specify others with `--reporter foo`.  Add this to the package.json "test" entry.  You can see the available reporters with

`./node_modules/.bin/mocha --reporters`

### Watch Files for Changes

`--watch` watches for changings to the test file and any .js file in cwd.  This is sweet.

### Using a Makefile

According to Mocha's best practices, it's a good idea to "add a make test target to your Makefile".  I'm not in the habit of providing a Makefile, but it's not that bad.

```Makefile
# The name of the file make will try to generate.
# If "test" already exists, make will not run the
# "recipe" for it.
test:
    # This is a "recipe", the commands used to create
    # the file "test".
    ./node_modules/.bin/mocha --reporter nyan

# Indicate that "test" is not a file to be created,
# but a task to execute.  This means it will always
# run the "recipe", even if "test" already exists.
.PHONY: test
```

### References

* http://www.devthought.com/2012/02/17/npm-tricks/
* http://visionmedia.github.io/mocha/
* http://www.codeproject.com/Articles/31488/Makefiles-in-Linux-An-Overview#T1
* http://www.gnu.org/software/make/manual/make.html#Phony-Targets
* https://www.npmjs.org/doc/misc/npm-scripts.html