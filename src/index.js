import "./styles.css";
import rootRender from "./rootRender";
import signal from "signal-js";
import editListitem from "./components/editListItem";
import main from "./components/main";
import header from "./components/header";
import sidebar from "./components/sidebar";

const defaultList = {
  title: "List #1",
  list: [
    {
      title: "Brush teeth",
      desc: "with toothpaste",
      priority: "urgent",
      checked: false,
    },
    {
      title: "Eat breakfast",
      desc: "tea and bread",
      priority: "moderate",
      checked: false,
    },
    {
      title: "Wash dishes",
      desc: "use less water",
      priority: "chill",
      checked: false,
    },
    {
      title: "Take a poop",
      desc: "dont take too long",
      priority: "chill",
      checked: false,
    },
    {
      title: "Cook rice",
      desc: "3 tins should be enough",
      priority: "urgent",
      checked: false,
    },
  ],
};

if (!localStorage.getItem("list")) {
  localStorage.setItem("list", JSON.stringify(defaultList));
}

const list = JSON.parse(localStorage.getItem("list"));

signal.on("updateList", (type, indexOrEntry, updatedEntry) => {
  switch (type) {
    case "newItem":
      list.list.push(indexOrEntry);
      break;
    case "checkItem":
      list.list[indexOrEntry].checked = !list.list[indexOrEntry].checked;
      break;
    case "deleteItem":
      list.list.splice(indexOrEntry, 1);
      signal.emit("refreshTodoList");
      break;
    case "editItem":
      list.list[indexOrEntry] = updatedEntry;
      signal.emit("refreshTodoList");
  }
  localStorage.setItem("list", JSON.stringify(list));
});

signal.on("refreshTodoList", () => {
  rootRender("", "rpc");
  rootRender(main(list));
});

signal.on("showEditItemDiv", (listItem, index) => {
  rootRender(editListitem(listItem, index));
});

rootRender(header());
rootRender(sidebar());
rootRender(main(list));
