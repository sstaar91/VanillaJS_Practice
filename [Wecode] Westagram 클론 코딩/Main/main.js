"use strict";

const input = document.getElementById("commentInput");
const submit = document.getElementById("submit");

function checkInput(e) {
  e.preventDefault();

  if (input.value.length === 0) {
    alert("댓글을 입력하세요!");
  } else {
    registerComment(input.value);
  }
}

function registerComment(value) {
  const commentLists = document.getElementById("commentLists");
  const newCommentList = document.createElement("li");
  const newComment = `<span class="name">mx_star</span><span>${value}</span><span class="delete">x</span>`;
  newCommentList.innerHTML = newComment;

  makeDeleteEvent(newCommentList);
  commentLists.appendChild(newCommentList);
  input.value = "";
}

function makeDeleteEvent(newCommentList) {
  const deleteBtn = newCommentList.querySelector(".delete");
  deleteBtn.addEventListener("click", () => deleteComment(newCommentList));
}

function deleteComment(newCommentList) {
  newCommentList.remove();
}

submit.addEventListener("click", checkInput);
