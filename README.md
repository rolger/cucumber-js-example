# Cucumber-JS starter project

This projects contains a simple JavaScript function, which we want to test with cucumber-js. We are going to develop
Gherking tests for the provided functionality. Let's start with a brief introduction of the implemtation and the business requirements.

For a detail description and the usage of cucumber-js, I recommend to have a look at the [documentation](https://github.com/cucumber/cucumber-js/tree/main).

## Step 1: Install cucumber-js

Cucumber is [available on npm](https://www.npmjs.com/package/@cucumber/cucumber):

```shell
$ npm install @cucumber/cucumber
```

Open the package.json and have a look at the added dependencies.

## Step 2: Run Cucumber

After installation, you should validate, if you can execute your cucumber-js installation. 

You can use npx:
```shell
$ npx cucumber-js
```

Or add an entry to your scripts section in package.json to run it with npm:
```shell
$ npm run cucumber
```

Or run it directly in a Unix shell:
```shell
$ ./node_modules/.bin/cucumber-js
```

After running cucumber-js, it informs us to add a configuration file called ./cucumber.js.

