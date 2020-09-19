import React from "react";
import { Item } from "./todo.model";
import "./styles.scss";
interface ItemModel {
  items: Array<Item>;
  onComplete: Function;
}
export class TodoList extends React.Component<ItemModel, any> {
  //1.Called  when the instance of component is beign created and inserted in DOM. - Mounting
  constructor(props: ItemModel) {
    console.log("TODOLIST - constructor(Mount) ");
    super(props);
    this.state = { name: "" };
  }

  //2.Called when instance of component is beigin created and inserted in DOM - Mouning
  render() {
    console.log("TODOLIST - render(Mount) ");
    return (
      <div>
        <ul>
          {this.props.items.map((item: Item) => (
            <li key={item.id}>
              <div className={`list_box ${item.completed ? "show" : "strike"}`}>
                <label>{item.text} </label>
              </div>
              <div className="todo_input">
                <button
                  key={item.id}
                  onClick={(e) => {
                    this.props.onComplete(e, item.id);
                  }}
                >
                  {" "}
                  Done
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  //3.Called when instance of component is beigin created and inserted in DOM - Mouning
  componentDidMount() {
    console.log("TODOLIST - componentDidMount (Mount) ");
    // this.setState({ name: "balajee" });
  }

  // static getDerivedStateFromProps(props: ItemModel, state: any) {
  //   console.log(props.items.length);
  //   if (props.items.length > 0) return true;
  //   else return false;
  // }

  shouldComponentUpdate(nextProp: ItemModel, nextState: any) {
    console.log(
      "TODOLIST - shouldComponentUpdate (Update) ",
      this.props.items !== nextProp.items
    );
    return this.props.items !== nextProp.items;
  }

  // getSnapshotBeforeUpdate() {
  //   console.log("TODOLIST - getSnapshotBeforeUpdate (Update) ");
  //   return null;
  // }

  componentDidUpdate() {
    console.log("TODOLIST - componentDidUpdate (Update) ");
  }
}
