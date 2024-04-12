import * as _ from "lodash";

const hey = () => {
  console.log(123);
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "import"], " ");

  document.body.appendChild(element);
};

export default hey;
