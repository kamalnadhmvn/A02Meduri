// This file tests our application code - open this file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// To complete this assignment, go to the end of this file, and uncomment the last 5 tests. 

// Refresh.  You will see several failing tests. 

// Modify the code in your appplication (M03.js) to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});



QUnit.test('Testing the new square function with four sets of inputs', function (assert) {
    assert.equal(App.number(2), 2, "works with a positive number");
    assert.equal(App.number(-3), -3, "works with a negative number");
    assert.equal(App.number(0), 0, "works with zero number");
    assert.throws(function () { App.square(null); }, new Error('The given argument is not a number'), "correctly raises an error if one tries to square a null");
});






