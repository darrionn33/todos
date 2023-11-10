function rootRender(element, option = "apc") {
  const root = document.querySelector("#root");
  if (option === "apc") {
    document.querySelector("#root").appendChild(element);
  } else if (option === "rpc") {
    while (root.children.length > 2) {
      root.removeChild(root.childNodes[2]);
    }
  }
}
export default rootRender;
