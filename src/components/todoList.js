import put from "put-selector";
import todoListItem from "./todoListItem";
import newListItemDiv from "./newListItemDiv";
export default function todoList(listItem) {
  const todoList = put("div.todo-list");
  put(todoList, "h2", listItem.title);

  const newListInputButton = put("button.new-list-item-button", "+ New Task");
  put(todoList, newListInputButton);

  newListInputButton.onclick = () => {
    newListInputButton.disabled = true;
    put(todoList, newListItemDiv());
    document.querySelector("input.new-list-item-input").focus();
  };

  listItem.list.forEach((listObject, index) => {
    put(todoList, todoListItem(listObject, index));
  });

  setTimeout(() => {
    const instruction = put("p", "(double tap to edit)");
    document.querySelector("div.todo-list > h2").appendChild(instruction);
  }, 0);
  return todoList;
}
