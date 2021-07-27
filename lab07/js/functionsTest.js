"use strict";

describe("sum", function () {

    describe("Sums all the elements in the array [1,2,3,4] ", function () {
        let testArray = [1, 2, 3, 4];
        let expected = 10;
        it(`${testArray} sum of all the elements is ${expected}`, function () {
            assert.equal(sum(testArray), expected);
        });
    });

    it("for empty array the result is 0", function () {
        let testArray = [];
        let expected = 0;
        assert.equal(sum(testArray), expected);
    });

});

describe("multiply", function () {
    describe("Multiply all the elements in the array [4,3,2,1] ", function () {
        let testArray = [4, 3, 2, 1];
        let expected = 24;
        it(`${testArray} mult of all the elements is ${expected}`, function () {
            assert.equal(multiply(testArray), expected);
        });
    });

    it("for empty array the result is 0", function () {
        let testArray = [];
        let expected = 0;
        assert.equal(multiply(testArray),expected);
    });

});

describe("reverse", function () {
    describe("Reverse of the String: Hello World", function () {
        let testStr = "Hello World";
        let expected = "dlroW olleH";

        it(`${testStr} reverse is ${expected}`, function () {
            assert.equal(reverse(testStr), expected);
        });
    });

    it("for empty arg the result is null", function () {
        let testStr = "";
        let expected = "";
        assert.equal(reverse(testStr),expected);
    });

});

describe("filterLongWords", function () {
    describe("Filter longer words than 3: [bear, eagle, crocodile, dog, fish] ", function () {
        let testArray = ["bear", "eagle", "crocodile", "dog", "fish"];
        let expected = ["bear", "eagle", "crocodile", "fish"];
        let val = 3;
        it(`${testArray} filtering the long words ${expected}`, function () {
            assert.equal(filterLongWords(testArray, val).toString(), expected.toString());
        });
    });

    it("for empty array the result is 0", function () {
        let testArray = [];
        let val = 0;
        let expected = 0;
        assert.equal(filterLongWords(testArray, val), expected);
    });

});