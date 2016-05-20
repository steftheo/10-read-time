'use strict';
/* globals numWords, readTime */

const nav = document.createElement("nav");
document.body.appendChild(nav);

const posts = document.querySelectorAll(".entry");

for (var i = 0; i < posts.length; i++) {
  const p = posts[i];

  const entryInfo = p.querySelector(".entry__info");
  const list = document.createElement("li");
  entryInfo.appendChild(list);
  list.classList.add("read-time");
  const entryContent = p.querySelector(`.entry__content`);
  const words = entryContent.innerText;

  const wpm = readTime(words, 200);
  list.innerHTML = `${wpm} mins`;

  // nav
  const navItem = document.createElement('a');
  nav.appendChild(navItem)

  navItem.setAttribute(`href`, `#${p.id}`);

  const title = p.querySelector('.entry__title');
  navItem.innerText = title.innerText;
}
