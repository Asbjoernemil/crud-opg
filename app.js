"use strict";
window.addEventListener("load", start);

const endPoint =
  "https://api-opg-default-rtdb.europe-west1.firebasedatabase.app/";

async function start() {
  getPosts();
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
