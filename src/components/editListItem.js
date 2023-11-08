import put from "put-selector";
import signal from "signal-js";
export default function editListitem(listItem = {}, index) {
  const editListitemBackdrop = put("div.edit-list-item-backdrop");
  const editListItemForm = put("form.edit-list-item-form");

  put(editListItemForm, "input", { value: listItem.title });
  put(editListItemForm, "textarea", {
    value: listItem.desc,
    placeholder: "Enter a description here...",
  });

  const priorityDiv = put("div.priority-div");
  put(priorityDiv, "h4", "Priority");

  const lowDiv = put("div");
  const labellow = put("label", "Low");
  labellow.setAttribute("for", "low");

  put(lowDiv, "input", {
    id: "low",
    type: "radio",
    name: "priority",
  });
  put(lowDiv, labellow);
  put(priorityDiv, lowDiv);

  const mediumDiv = put("div");
  const labelmedium = put("label", "Medium");
  labelmedium.setAttribute("for", "medium");

  put(mediumDiv, "input", {
    id: "medium",
    type: "radio",
    name: "priority",
  });
  put(mediumDiv, labelmedium);
  put(priorityDiv, mediumDiv);

  const highDiv = put("div");
  const labelhigh = put("label", "High");
  labelhigh.setAttribute("for", "high");
  put(highDiv, labelhigh);
  put(highDiv, "input", {
    id: "high",
    type: "radio",
    name: "priority",
  });
  put(highDiv, labelhigh);
  put(priorityDiv, highDiv);

  switch (listItem.priority) {
    case "high":
      setTimeout(() => {
        document.querySelector("#high").checked = true;
      }, 0);
      break;
    case "medium":
      setTimeout(() => {
        document.querySelector("#medium").checked = true;
      }, 0);
      break;
    case "low":
      setTimeout(() => {
        document.querySelector("#low").checked = true;
      }, 0);
      break;
  }

  const statusDiv = put("div.status-div");
  put(statusDiv, "h4", "Status");

  const doneDiv = put("div");
  const labelDone = put("label", "Done");
  labelDone.setAttribute("for", "done");

  put(doneDiv, "input", {
    id: "done",
    type: "radio",
    name: "status",
  });
  put(doneDiv, labelDone);
  put(statusDiv, doneDiv);

  const notDoneDiv = put("div");
  const labelNotDone = put("label", "Not Done");
  labelNotDone.setAttribute("for", "not-done");

  put(notDoneDiv, "input", {
    id: "not-done",
    type: "radio",
    name: "status",
  });
  put(notDoneDiv, labelNotDone);
  put(statusDiv, notDoneDiv);

  if (listItem.checked) {
    setTimeout(() => {
      document.querySelector("#done").checked = true;
      console.log("d");
    }, 0);
  } else {
    setTimeout(() => {
      document.querySelector("#not-done").checked = true;
    }, 0);
  }

  const saveButton = put("button#save-button", "Save Task");

  put(editListItemForm, priorityDiv);
  put(editListItemForm, statusDiv);
  put(editListItemForm, saveButton);

  saveButton.onclick = (e) => {
    e.preventDefault();
    const updatedItem = {
      title: document.querySelector(
        "form.edit-list-item-form > input:nth-child(1)"
      ).value,
      desc: document.querySelector("form.edit-list-item-form > textarea").value,
      priority: document.querySelector(
        '.priority-div > div > input[name="priority"]:checked'
      ).id,
      checked: document.querySelector("#done").checked,
    };
    signal.emit("updateList", "editItem", index, updatedItem);
  };

  put(editListitemBackdrop, editListItemForm);

  const closeButton = put("button#close-button", "X");
  put(editListItemForm, closeButton);

  closeButton.onclick = () => {
    signal.emit("refreshTodoList");
  };
  editListItemForm.ondblclick = (e) => {
    e.stopPropagation();
  };
  editListitemBackdrop.ondblclick = () => {
    signal.emit("refreshTodoList");
  };

  return editListitemBackdrop;
}
