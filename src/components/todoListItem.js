import put from "put-selector";
import signal from "signal-js";
import svg from "svg";
import doubleTapListener from "./doubleTapListener";
export default function todoListItem(listItem, index) {
  const todoListItem = put("div.todo-item");
  todoListItem.setAttribute("data-priority", listItem.priority);

  const checkBox = put("div.checkbox");
  if (listItem.checked) {
    checkBox.classList.add("checked");
  }
  checkBox.onclick = () => {
    checkBox.classList.toggle("checked");
    signal.emit("updateList", "checkItem", index);
  };

  let svgText =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Remove Task</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>';
  const deleteButton = svg(svgText);

  deleteButton.onclick = () => {
    signal.emit("updateList", "deleteItem", index);
  };

  const todoListTitle = put("h3", listItem.title);
  put(todoListItem, checkBox);
  put(todoListItem, todoListTitle);
  put(todoListItem, "div.priority");
  put(todoListItem, deleteButton);

  todoListTitle.ondblclick = () => {
    signal.emit("showEditItemDiv", listItem, index);
  };

  doubleTapListener(todoListItem, () => {
    signal.emit("showEditItemDiv", listItem, index);
  });

  return todoListItem;
}
