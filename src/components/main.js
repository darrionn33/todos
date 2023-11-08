import put from "put-selector";
import todoList from "./todoList";
export default function main(list) {
  const main = put("main");
  put(main, todoList(list));

  return main;
}
