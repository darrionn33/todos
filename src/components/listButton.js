import put from "put-selector";
import signal from "signal-js";
import svg from "svg";
export default function listButton(list, index, currentListIndex) {
  const listButton = put("button", list.title);
  listButton.setAttribute("data-index", index);

  if (index === currentListIndex) {
    listButton.classList.add("active");
  }

  listButton.onclick = () => {
    signal.emit("updateList", "changeCurrentActiveList", index);
  };
  
  let svgText =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Remove List</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>';
  const deleteButton = svg(svgText);

  deleteButton.onclick = (e) => {
    signal.emit("updateList", "deleteList", index);
    e.stopPropagation();
  };

  put(listButton, deleteButton);

  return listButton;
}
