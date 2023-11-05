import "./styles.css";
import rootRender from "./rootRender";
import todoList from "./components/todoList";
import signal from "signal-js";

const defaultList = {
  title: "List #1",
  list: [
    { title: "Poop", priority: "urgent", checked: false },
    { title: "Eat Breakfast", priority: "moderate", checked: false },
    { title: "Wash Dishes", priority: "chill", checked: false },
    { title: "Bathe Ezio", priority: "chill", checked: false },
    { title: "Beat Ezio Up", priority: "urgent", checked: false },
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
  }
  localStorage.setItem("list", JSON.stringify(list));
});

signal.on("refreshTodoList", () => {
  rootRender("", "rpc");
  rootRender(todoList(list), "apc");
});

rootRender(todoList(list), "apc");
