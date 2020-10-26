import React from "react";
import { Item } from "./todo.model";
interface ListItemProps {
  item: Item;
  onTodoItemComplete: Function;
}
const ListItem: React.FC<ListItemProps> = ({ item, onTodoItemComplete }) => {
  return (
    <>
      <li
        draggable
        onDrag={(e) => {
          console.log(e);
        }}
      >
        <div className={`list_box ${item.completed ? "show" : "strike"}`}>
          <label>{item.text} </label>
        </div>
        <div className="todo_input">
          <button
            key={item.id}
            onClick={(e) => {
              onTodoItemComplete(item.id);
            }}
          >
            Done
          </button>
        </div>
      </li>
    </>
  );
};

export default ListItem;
