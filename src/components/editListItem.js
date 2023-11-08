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

  const chillDiv = put("div");
  const labelChill = put("label", "Chill");
  labelChill.setAttribute("for", "chill");

  put(chillDiv, "input", {
    id: "chill",
    type: "radio",
    name: "priority",
  });
  put(chillDiv, labelChill);
  put(priorityDiv, chillDiv);

  const moderateDiv = put("div");
  const labelModerate = put("label", "Moderate");
  labelModerate.setAttribute("for", "moderate");

  put(moderateDiv, "input", {
    id: "moderate",
    type: "radio",
    name: "priority",
  });
  put(moderateDiv, labelModerate);
  put(priorityDiv, moderateDiv);

  const urgentDiv = put("div");
  const labelUrgent = put("label", "Urgent");
  labelUrgent.setAttribute("for", "urgent");
  put(urgentDiv, labelUrgent);
  put(urgentDiv, "input", {
    id: "urgent",
    type: "radio",
    name: "priority",
  });
  put(urgentDiv, labelUrgent);
  put(priorityDiv, urgentDiv);

  switch (listItem.priority) {
    case "urgent":
      setTimeout(() => {
        document.querySelector("#urgent").checked = true;
      }, 0);
      break;
    case "moderate":
      setTimeout(() => {
        document.querySelector("#moderate").checked = true;
      }, 0);
      break;
    case "chill":
      setTimeout(() => {
        document.querySelector("#chill").checked = true;
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
    signal.emit("addListEntry", index, "editListItem", updatedItem);
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
