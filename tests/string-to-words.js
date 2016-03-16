'use strict';

/* globals stringToWords */

QUnit.module(`stringToWords`);

test(`free passing test`, (assert) => {
  assert.ok(true);
});

test(`stringToWords is a function`, (assert) => {
  assert.ok(stringToWords, `'stringToWords' should exist`);
  assert.equal(typeof stringToWords, `function`,
    `'stringToWords' should be a named function (not assigned to a variable)`);

  assert.equal(stringToWords.length, 1,
    `'stringToWords' should accept an argument: a string of words from an article`);
});

test(`stringToWords returns an array of words`, (assert) => {
  const wordString = `Foo`;
  const wordsString = `Lorem ipsum dolor sit amet`;
  const word = [`Foo`];
  const words = [`Lorem`, `ipsum`, `dolor`, `sit`, `amet`];

  assert.deepEqual(stringToWords(wordString), word,
    `stringToWords returns an array of words from a string: "${wordString}"`);
  assert.deepEqual(stringToWords(wordsString), words,
    `stringToWords returns an array of words from a string: "${wordsString}"`);
});
