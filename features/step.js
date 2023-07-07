const assert = require('assert')
const {BeforeStep, When, Then, AfterStep, Given} = require('@cucumber/cucumber')
const {calculatePrice} = require("../src/schipass");


BeforeStep(function () {
    this.log("BEFORE step called")
    this.log("current age is " + this.age)
    this.log("current price is " + this.price)
});

AfterStep(function () {
    this.log("AFTER step called")
    this.log("current age is " + this.age)
    this.log("current price is " + this.price)
});

Given('a person of age {int} is a {string}', function (age, description) {
    this.age = age;

    this.log(description);
});

When('we calculate the ticket price', function () {
    this.price = calculatePrice(this.age);
});

Then('the price will be {float} $', function (expectedPrice) {
    assert.equal( expectedPrice, this.price);
});
