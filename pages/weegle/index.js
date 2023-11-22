import { addDefaultPath } from "../../utils/addDefaultPath.js";

const logoBox = document.getElementsByClassName("logoBox")[0];
logoBox.addEventListener("click", (e) => {
  e.preventDefault();
  addDefaultPath(e.target.pathname);
});
