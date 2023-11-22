const commentForm = document.getElementsByClassName("comment")[0];
const commentLength = document.getElementsByClassName("name");
const commentLists = document.getElementById("commentLists");

function sumbitComment(e) {
  e.preventDefault();

  if (e.target[0].value.trim() === "") return;

  const userData = {
    id: commentLength.length - 1,
    user: "user",
    comment: e.target[0].value,
  };

  showComment(userData);
  e.target[0].value = "";
}

function showComment(data) {
  const li = document.createElement("li");
  const name = document.createElement("span");
  const comment = document.createElement("span");

  name.classList.add("name");

  name.textContent = data.user + data.id;
  comment.textContent = data.comment;

  li.appendChild(name);
  li.appendChild(comment);

  commentLists.appendChild(li);
}

commentForm.addEventListener("submit", sumbitComment);
