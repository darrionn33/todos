function rootRender(element, option = "apc") {
  const root = document.querySelector("#root");
  if (option === "apc") {
    document.querySelector("#root").appendChild(element);
  } else if (option === "rpc") {
    root.removeChild(root.childNodes[0]);
  }
}
export default rootRender;
