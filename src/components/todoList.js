import put from "put-selector";
import todoListItem from "./todoListItem";
import newListItemDiv from "./newListItemDiv";
export default function todoList(listItem) {
  const todoList = put("div.todo-list");
  put(todoList, "h2", listItem.title);
  listItem.list.forEach((listObject, index) => {
    put(
      todoList,
      todoListItem(
        listObject.title,
        listObject.priority,
        listObject.checked,
        index
      )
    );
  });
  const newListInputButton = put("button.new-list-item-button", "+ New Task");
  put(todoList, newListInputButton);

  newListInputButton.onclick = () => {
    put(newListInputButton, "!");
    put(todoList, newListItemDiv());
    document.querySelector("input.new-list-item-input").focus();
  };

  return todoList;
}
