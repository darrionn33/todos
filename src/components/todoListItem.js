import put from "put-selector";
export default function todoListItem(title, priority) {
  const todoListItem = put("div.todo-item");
  todoListItem.setAttribute("data-priority", priority);

  const checkBox = put("div.checkbox");
  checkBox.onclick = () => {
    checkBox.classList.toggle("checked");
  };

  put(todoListItem, checkBox);
  put(todoListItem, "h3", title);
  put(todoListItem, "p", priority.toUpperCase());

  return todoListItem;
}
