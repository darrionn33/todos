import put from "put-selector";
import signal from "signal-js";
export default function sidebar(lists, currentListIndex) {
  const sidebar = put("div.sidebar");

  lists.forEach((list, index) => {
    const listButton = put("button", list.title);
    listButton.setAttribute("data-index", index);
    if (index === currentListIndex) {
      listButton.classList.add("active");
    }

    listButton.onclick = () => {
      signal.emit("updateList", "changeCurrentActiveList", index);
    };

    put(sidebar, listButton);
  });

  return sidebar;
}
