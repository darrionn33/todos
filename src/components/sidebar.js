import put from "put-selector";
import newListDiv from "./newListDiv";
import listButton from "./listButton";
export default function sidebar(lists, currentListIndex) {
  const sidebar = put("div.sidebar");

  const newListDivButton = put("button", "+ New List");
  newListDivButton.onclick = () => {
    newListDivButton.disabled = true;
    put(sidebar, newListDiv());
    document.querySelector("div.new-list-div > input").focus();
  };
  put(sidebar, newListDivButton);

  lists.forEach((list, index) => {
    put(sidebar, listButton(list, index, currentListIndex));
  });

  return sidebar;
}
