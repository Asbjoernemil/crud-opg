"use strict";
window.addEventListener("load", start);

const endPoint =
  "https://api-opg-default-rtdb.europe-west1.firebasedatabase.app/";

async function start() {
  const dataPost = await getPosts();
  const dataUser = await getUsers();
  showPosts(dataPost);
  showUsers(dataUser);
}

async function getPosts() {
  const response = await fetch(`${endPoint}/posts.json`);
  const data = await response.json();
  const posts = preparePostData(data);

  return posts;
}

async function getUsers() {
  const response = await fetch(`${endPoint}/users.json`);
  const data = await response.json();
  const users = prepareUserData(data);
  return users;
}

function preparePostData(dataObject) {
  const postArray = [];
  for (const key in dataObject) {
    const post = dataObject[key];
    post.id = key;
    postArray.push(post);
  }
  return postArray;
}

function prepareUserData(dataUserObject) {
  const userArray = [];
  for (const key in dataUserObject) {
    const user = dataUserObject[key];
    user.id = key;
    userArray.push(user);
  }
  return userArray;
}

function showPosts(data) {
  for (let index = 0; index < data.length; index++) {
    showPost(data[index]);
  }
}

function showUsers(users) {
  for (let index = 0; index < users.length; index++) {
    console.log(users[index]);
    showUser(users[index]);
  }
}

function showPost(posts) {
  const myHTML = `<article class="grid-item">
				<img src="${posts.image}">
				<h2>${posts.title}</h2>
				<span><h2>${posts.body}</h2></span>
			</article>`;
  document.querySelector("#posts").insertAdjacentHTML("beforeend", myHTML);
}

function showUser(users) {
  const myHTML = `<article class="grid-item">
				<img src="${users.image}">
				<h2>${users.title}</h2>
				<span><h2>${users.name}</h2></span>
			</article>`;
  document.querySelector("#users").insertAdjacentHTML("beforeend", myHTML);
}
