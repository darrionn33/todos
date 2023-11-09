import signal from "signal-js";
import put from "put-selector";
export default function newListDiv() {
  const newListDiv = put("div.new-list-div");

  const newListInput = put("input");
  newListInput.onkeydown = (e) => {
    if (e.key === "Enter") {
      newListButton.click();
    }
  };

  const newListButton = put("button#add-new-list", "+");
  newListButton.onclick = () => {
    put(newListDiv, "!");
    if (newListInput.value !== "") {
      signal.emit("updateList", "newList", newListInput.value);
    }
  };

  put(newListDiv, newListInput);
  put(newListDiv, newListButton);

  return newListDiv;
}
