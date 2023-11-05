import "./styles.css";
import rootRender from "./rootRender";
import todoList from "./components/todoList";
import signal from "signal-js";
const list = {
  title: "List #1",
  list: [
    { title: "Poop", priority: "urgent" },
    { title: "Eat Breakfast", priority: "moderate" },
    { title: "Wash Dishes", priority: "chill" },
    { title: "Bathe Ezio", priority: "chill" },
    { title: "Beat Ezio Up", priority: "urgent" },
  ],
};
signal.on("addListItem", (newListItem) => list.list.push(newListItem));
signal.on("refreshTodoList", () => {
  rootRender("", "rpc");
  rootRender(todoList(list), "apc");
});
rootRender(todoList(list), "apc");
