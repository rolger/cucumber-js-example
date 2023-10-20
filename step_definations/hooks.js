const { After, AfterAll, Before, BeforeAll } = require('@cucumber/cucumber');

BeforeAll(async function() {
    console.log("------------console 1: before all hook is called---------- ");
   // this will be executed before first scenario
  });

  Before(async function() {
    console.log("console 2: before  hook is called ");
   // this will be executed before first scenario
  });

  After(async function() {
    console.log("console 3: after  hook is called ");
   // this will be executed before first scenario
  });

  AfterAll(async function() {
    console.log("---------console 4: after all hook is called --------");
   // this will be executed before first scenario
   return Promise.resolve();
  });

  Before({tags:"@foo"},async function() {
    console.log("console 5: Tagged hook is called ");
   // this will be executed before first scenario
  });
