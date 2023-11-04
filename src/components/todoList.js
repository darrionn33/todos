import put from "put-selector";
import todoListItem from "./todoListItem";
export default function todoList(listItem) {
  const todoList = put("div.todo-list");
  put(todoList, "h2", listItem.title);
  listItem.list.forEach((listObject) => {
    put(todoList, todoListItem(listObject.title, listObject.priority));
  });
  return todoList;
}
