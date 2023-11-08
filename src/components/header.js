import put from "put-selector";
export default function header() {
  const header = put("header");
  put(header, "h1", "Todosss");

  return header;
}
