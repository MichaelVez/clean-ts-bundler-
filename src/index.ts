import * as _ from "lodash";
import hey from "./test";

hey();
function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

console.log("123");
document.body.appendChild(component());
