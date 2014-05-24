# The name of the file make will try to generate.
# If "test" already exists, make will not run the
# "recipe" for it.
test:
	# This is a "recipe", the commands used to create
	# the file "test".
	./node_modules/.bin/mocha --reporter spec

# Indicate that "test" is not a file to be created,
# but a task to execute.  This means it will always
# run the "recipe", even if "test" already exists.
.PHONY: test