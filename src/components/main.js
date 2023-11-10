import put from "put-selector";
import todoList from "./todoList";
export default function main(list, index) {
  const main = put("main");
  put(main, todoList(list, index));

  return main;
}
