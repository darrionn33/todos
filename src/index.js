import "./styles.css";
import rootRender from "./rootRender";
import todoList from "./components/todoList";
import signal from "signal-js";

if (!localStorage.getItem("list")) {
  localStorage.setItem(
    "list",
    JSON.stringify({
      title: "List #1",
      list: [
        { title: "Poop", priority: "urgent" },
        { title: "Eat Breakfast", priority: "moderate" },
        { title: "Wash Dishes", priority: "chill" },
        { title: "Bathe Ezio", priority: "chill" },
        { title: "Beat Ezio Up", priority: "urgent" },
      ],
    })
  );
}
const list = JSON.parse(localStorage.getItem("list"));
signal.on("addListItem", (newListItem) => {
  list.list.push(newListItem);
  localStorage.setItem("list", JSON.stringify(list));
});
signal.on("refreshTodoList", () => {
  rootRender("", "rpc");
  rootRender(todoList(list), "apc");
});
rootRender(todoList(list), "apc");
