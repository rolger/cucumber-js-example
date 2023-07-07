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

## Step 3: Adding our first test

We need to add a feature file containing our tests in Gherkin language. The default directory for
feature files ist a directory called 'features'. cucumber-js is going to lookup any file in any subdirectory 
of this location.

Let's implement the first test-case according to the example given in 'run.js'.

```code
Feature: Skipasspreis Calculator

  Scenario: Calculate ski pass price with full prices
    Given an person with the age of 8
    When the price for a ticket is calculated
    Then the price is 25.00
```

Executing this script will result in some errors displayed on the command line. Following the instructions from the error output
we can copy the stub implementation into a JavaScript file, which will contain the step implementation. You can choose any name
for your step file as long its located in the 'features' folder.

## Step 4: Adding a html report

cucumber-js provides different kinds of reports. These reports can be specified by passing a 
[formatter](https://github.com/cucumber/cucumber-js/blob/main/docs/formatters.md) parameter on the command line.

The default output is the console with the summary parameter ('-f summary').

Creating a html report can be achieved with the following:
```shell
$ npx cucumber-js -f html:test/report/cucumber_report.html
```

The options can either be added on the command line, in your scripts or in the configuration file.

## Step 4: Enhancing the test cases to a scenario outline

Finally, we want add more test to enhance the coverage. A simple possibility is by changing the scenario to scenario outline.

