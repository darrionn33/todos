import "./styles.css";
import rootRender from "./rootRender";
import todoList from "./components/todoList";
import signal from "signal-js";

const defaultList = {
  title: "List #1",
  list: [
    { title: "Brush teeth", priority: "urgent", checked: false },
    { title: "Eat breakfast", priority: "moderate", checked: false },
    { title: "Wash dishes", priority: "chill", checked: false },
    { title: "Take a poop", priority: "chill", checked: false },
    { title: "Cook rice", priority: "urgent", checked: false },
  ],
};

if (!localStorage.getItem("list")) {
  localStorage.setItem("list", JSON.stringify(defaultList));
}

const list = JSON.parse(localStorage.getItem("list"));

signal.on("addListEntry", (indexOrEntry, type) => {
  switch (type) {
    case "listItem":
      list.list.push(indexOrEntry);
      break;
    case "checkbox":
      list.list[indexOrEntry].checked = !list.list[indexOrEntry].checked;
      break;
    case "delete":
      list.list.splice(indexOrEntry, 1);
      signal.emit("refreshTodoList");
      break;
  }
  localStorage.setItem("list", JSON.stringify(list));
});

signal.on("refreshTodoList", () => {
  rootRender("", "rpc");
  rootRender(todoList(list), "apc");
});

rootRender(todoList(list), "apc");
