'use strict';

/* globals numWords */

QUnit.module(`numWords`);

test(`free passing test`, (assert) => {
  assert.ok(true);
});

test(`numWords is a function`, (assert) => {
  assert.ok(numWords, `'numWords' should exist`);
  assert.equal(typeof numWords, `function`,
    `'numWords' should be a named function (not assigned to a variable)`);

  assert.equal(numWords.length, 1,
    `'numWords' should accept an argument: a string of words from an article`);
});

test(`numWords can calculate number of words in a string`, (assert) => {
  const word = `Foo`;
  const words = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.` +
    ` Eaque reiciendis veritatis laborum, laboriosam ab explicabo delectus!` +
    ` Repellendus, natus. Eveniet perspiciatis temporibus consectetur nemo` +
    `fugiat molestias deleniti neque ad consequuntur quod?`;

  assert.equal(numWords(word), 1,
    `'numWords' can know that there is only one word in "${word}"`);
  assert.equal(numWords(words), 29,
    `'numWords' can calculate the number of words in longer strings "${words}"`);
});
