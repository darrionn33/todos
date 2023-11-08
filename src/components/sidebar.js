import put from "put-selector";
export default function sidebar() {
  const sidebar = put("div.sidebar");
  put(sidebar, "h2", "option 1");
  put(sidebar, "h2", "option 2");
  put(sidebar, "h2", "option 3");
  put(sidebar, "h2", "option 4");

  return sidebar;
}
