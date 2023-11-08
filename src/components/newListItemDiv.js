import put from "put-selector";
import signal from "signal-js";
import svg from "svg";

export default function newListItemDiv() {
  const handleSubmit = () => {
    if (newListItemInput.value !== "") {
      signal.emit("updateList", "newItem", {
        title: newListItemInput.value,
        priority: select.value,
        desc: "",
      });
    }
    signal.emit("refreshTodoList");
  };

  const newListItemDiv = put("div.new-list-item");
  const select = put("select");
  put(select, "option", "low");
  put(select, "option", "medium");
  put(select, "option", "high");

  const newListItemInput = put("input.new-list-item-input", {
    placeholder: "Enter a task here...",
  });
  newListItemInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  });

  const svgText =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Add Task</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>';

  const checkBoxSvg = svg(svgText);
  checkBoxSvg.addEventListener("click", handleSubmit);

  put(newListItemDiv, newListItemInput);
  put(newListItemDiv, select);
  put(newListItemDiv, checkBoxSvg);

  return newListItemDiv;
}
