import put from "put-selector";
export default function header() {
  const header = put("header");
  put(header, "h1", "Todosss");

  const hamburgerMenu = put("div.ham-menu");
  put(hamburgerMenu, "div");
  put(hamburgerMenu, "div");
  put(hamburgerMenu, "div");

  hamburgerMenu.onclick = () => {
    document.querySelector("div.sidebar").style.transform = "translateX(0)";
  };

  put(header, hamburgerMenu);

  return header;
}
