"use strict";

describe("filter", function () {
    describe("The function returns the string after removing all the banned words in array['the','best','world'] ", function () {
        let statement = "I am the best in the world";
        let array = ['the','best','world'];
        let statementExpected = "I am in";
        it(`the statement ${statement} with banned words are ${statementExpected}`, function () {
            assert.equal(firstExcercise(statement,array), statementExpected);
        });
    });
});

describe("bubbleSort", function () {
    describe("sort array the elements in the array [4,30,6,45]", function () {
        let arraySort = [4, 30, 6, 45];
        let expected = [4, 6, 30, 45];
        it(`${arraySort} sort of all the elements is ${expected}`, function () {
            assert.equal(secondExcercise(arraySort).toString, expected.toString);
        });
    });
});