import "./styles.css";
import rootRender from "./rootRender";
import signal from "signal-js";
import editListitem from "./components/editListItem";
import main from "./components/main";
import header from "./components/header";
import sidebar from "./components/sidebar";
import settings from "./components/settingsButton";

const defaultLists = [
  {
    title: "List #1",
    list: [
      {
        title: "Brush teeth",
        desc: "with toothpaste",
        priority: "high",
        checked: false,
      },
      {
        title: "Watch anime",
        desc: "with Hammy :))",
        priority: "high",
        checked: false,
      },
      {
        title: "Eat breakfast",
        desc: "tea and bread",
        priority: "medium",
        checked: false,
      },
      {
        title: "Wash dishes",
        desc: "use less water",
        priority: "low",
        checked: false,
      },
      {
        title: "Take a poop",
        desc: "dont take too long",
        priority: "low",
        checked: false,
      },
      {
        title: "Cook rice",
        desc: "3 tins should be enough",
        priority: "high",
        checked: false,
      },
    ],
  },
  {
    title: "List #2",
    list: [
      {
        title: "Brush teeth",
        desc: "with toothpaste",
        priority: "high",
        checked: false,
      },
      {
        title: "Watch anime",
        desc: "with Hammy :))",
        priority: "high",
        checked: false,
      },
      {
        title: "Eat breakfast",
        desc: "tea and bread",
        priority: "medium",
        checked: false,
      },
      {
        title: "Wash dishes",
        desc: "use less water",
        priority: "low",
        checked: false,
      },
      {
        title: "Take a poop",
        desc: "dont take too long",
        priority: "low",
        checked: false,
      },
      {
        title: "Cook rice",
        desc: "3 tins should be enough",
        priority: "high",
        checked: false,
      },
    ],
  },
];

if (!localStorage.getItem("lists")) {
  localStorage.setItem("lists", JSON.stringify(defaultLists));
}

const lists = JSON.parse(localStorage.getItem("lists"));

let currentListIndex = 0;

signal.on("updateList", (type, indexOrEntry, updatedEntry) => {
  switch (type) {
    case "newItem":
      lists[currentListIndex].list.push(indexOrEntry);
      break;
    case "checkItem":
      lists[currentListIndex].list[indexOrEntry].checked =
        !lists[currentListIndex].list[indexOrEntry].checked;
      break;
    case "deleteItem":
      lists[currentListIndex].list.splice(indexOrEntry, 1);
      signal.emit("refreshTodoList");
      break;
    case "editItem":
      lists[currentListIndex].list[indexOrEntry] = updatedEntry;
      signal.emit("refreshTodoList");
      break;
    case "changeCurrentActiveList":
      currentListIndex = indexOrEntry;
      signal.emit("refreshTodoList");

      break;
    case "newList":
      lists.push({ title: indexOrEntry, list: [] });
      currentListIndex = lists.length - 1;
      signal.emit("refreshTodoList");
      break;
    case "deleteList":
      if (lists.length === 1) {
        lists[0] = { title: "Default List", list: [] };
        currentListIndex = 0;
      } else {
        lists.splice(indexOrEntry, 1);
        currentListIndex--;
      }
      signal.emit("refreshTodoList");
      break;
    case "resetLists":
      lists.length = 0;
      lists[0] = defaultLists[0];
      signal.emit("refreshTodoList");
      break;
  }
  localStorage.setItem("lists", JSON.stringify(lists));
});

signal.on("refreshTodoList", () => {
  rootRender("", "rpc");
  rootRender(sidebar(lists, currentListIndex));
  rootRender(main(currentListSelector(currentListIndex)));
});

signal.on("showEditItemDiv", (listItem, index) => {
  rootRender(editListitem(listItem, index));
});

const currentListSelector = (currentListIndex) => {
  return lists[currentListIndex];
};
rootRender(settings());
rootRender(header());
rootRender(sidebar(lists, currentListIndex));
rootRender(main(currentListSelector(0)));
