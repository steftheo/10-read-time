
'use strict';

function readTime(word, wpm = 1) {
  return Math.ceil(word.length / wpm);
}
