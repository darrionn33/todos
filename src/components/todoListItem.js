import put from "put-selector";
import signal from "signal-js";
export default function todoListItem(title, priority, checked, index) {
  const todoListItem = put("div.todo-item");
  todoListItem.setAttribute("data-priority", priority);

  const checkBox = put("div.checkbox");
  if (checked) {
    checkBox.classList.add("checked");
  }
  checkBox.onclick = () => {
    checkBox.classList.toggle("checked");
    signal.emit("addListEntry", index, "checkbox");
  };

  put(todoListItem, checkBox);
  put(todoListItem, "h3", title);
  put(todoListItem, "p", priority.toUpperCase());

  return todoListItem;
}
