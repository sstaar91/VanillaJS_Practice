import { addDefaultPath } from "../../utils/addDefaultPath.js";

const logo = document.getElementsByClassName("logo")[0];
logo.addEventListener("click", () => {
  addDefaultPath("/");
});
