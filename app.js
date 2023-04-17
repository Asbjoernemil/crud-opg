"use strict";
window.addEventListener("load", start);

const endPoint =
  "https://api-opg-default-rtdb.europe-west1.firebasedatabase.app/";

async function start() {
  const data = await getPosts();
  data.forEach(showPost);
}

async function getPosts() {
  const response = await fetch(`${endPoint}/posts.json`);
  const data = await response.json();
  const posts = preparePostData(data);
  console.log(posts);
  return posts;
}

function preparePostData(dataObject) {
  const postArray = [];
  for (const key in dataObject) {
    const post = dataObject[key];
    post.id = key;
    postArray.push(post);
  }
  console.log(postArray);
  return postArray;
}

function showPost(data) {
  const myHTML = `<article class="grid-item">
				<img src="${data.image}">
				<h2>${data.title}</h2>
			</article>`;
  document.querySelector("#data").insertAdjacentHTML("beforeend", myHTML);
}
