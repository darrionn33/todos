import put from "put-selector";
import todoListItem from "./todoListItem";
import newListItemDiv from "./newListItemDiv";
import doubleTapListener from "./doubleTapListener";
import signal from "signal-js/src";
export default function todoList(listItem, index) {
  const todoList = put("div.todo-list");
  const todoListTitle = put("h2", listItem.title);

  todoListTitle.ondblclick = () => {
    put(todoListTitle, "!");
    editTitleInput.style.display = "flex";
    editTitleInput.focus();
  };

  doubleTapListener(todoListTitle, () => {
    put(todoListTitle, "!");
    editTitleInput.style.display = "flex";
    editTitleInput.focus();
  });

  put(todoList, todoListTitle);

  const editTitleInput = put("input.edit-title-input", {
    value: listItem.title,
    spellcheck: false,
  });

  editTitleInput.onblur = () => {
    if (editTitleInput.value !== "") {
      signal.emit("updateList", "renameList", index, editTitleInput.value);
    } else {
      signal.emit("refreshTodoList");
    }
  };

  put(todoList, editTitleInput);

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
