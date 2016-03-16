'use strict';

QUnit.module(`Application (Do this LAST)`);

const body = document.querySelector(`body`);

test(`Show read time for articles to user`, (assert) => {
  const firstReadTime = document.querySelector(`.entry__info li.read-time`);

  assert.notStrictEqual(firstReadTime, null,
    `There should be an "li" element with a class of "read-time" in the "entry__info" lists`);
});
