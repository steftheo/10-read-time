
'use strict';

function readTime(text, wpm = 1) {

  return Math.ceil(numWords(text) / wpm);
}
