'use strict';

QUnit.module(`Application (Do this LAST)`);

const body = document.querySelector(`body`);

test(`Show read time for articles to user`, (assert) => {
  const firstReadTime = document.querySelector(`#lua-cooper .entry__info li.read-time`);
  const secondReadTime = document.querySelector(`#rocket-code .entry__info li.read-time`);

  assert.notStrictEqual(firstReadTime, null,
    `There should be an "li" element with a class of "read-time"
     in the "entry__info" lists: First`);
  assert.equal(firstReadTime.innerText.trim(), `5 mins`,
    `The read time for the article should be shown based on a WPM of 200 words per min`);

  assert.notStrictEqual(secondReadTime, null,
    `There should be an "li" element with a class of "read-time"
     in the "entry__info" lists: Second`);
  assert.equal(secondReadTime.innerText.trim(), `8 mins`,
    `The read time for the article should be shown based on a WPM of 200 words per min`);
});
