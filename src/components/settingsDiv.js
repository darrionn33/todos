import put from "put-selector";
import signal from "signal-js/src";
export default function settingsDiv(params) {
  const settingsBackdrop = put("div.settings-backdrop");
  const settingsDiv = put("div.settings-div");

  const clearDataButton = put("button", "Clear Data");

  clearDataButton.onclick = (e) => {
    window.localStorage.clear();
    signal.emit("updateList", "resetLists");
    e.stopPropagation();
  };
  settingsDiv.onclick = (e) => {
    e.stopPropagation();
  };
  put(settingsDiv, clearDataButton);

  put(settingsBackdrop, settingsDiv);

  settingsBackdrop.onclick = () => {
    put(settingsBackdrop, "!");
  };

  return settingsBackdrop;
}
