import React from "react";
import { Item } from "./todo.model";
import "./styles.scss";
interface ItemModel {
  items: Array<Item>;
  onComplete: Function;
}
export class TodoList extends React.Component<ItemModel, any> {
  listReference: React.RefObject<HTMLDivElement>;
  //1.Called  when the instance of component is beign created and inserted in DOM. - Mounting
  constructor(props: ItemModel) {
    console.log("TODOLIST - constructor(Mount) ");
    super(props);
    this.state = { name: "" };
    this.listReference = React.createRef();
  }

  static defaultprops = {
    items: [],
    onComplete: () => {}
  };
  // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  //2.Called when instance of component is beigin created and inserted in DOM - Mouning
  render() {
    console.log("TODOLIST - render(Mount) ");
    return (
      <div className="list" ref={this.listReference}>
        <ul>
          {this.props.items.map((item: Item) => (
            <li draggable
              key={item.id}
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
                  onClick={this.onTodoItemComplete.bind(this, item.id)}
                >
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

  static getDerivedStateFromProps(props: ItemModel, state: any) {
    return null;
  }

  shouldComponentUpdate(nextProp: ItemModel, nextState: any) {
    console.log(
      "TODOLIST - shouldComponentUpdate (Update) ",
      this.props.items !== nextProp.items
    );
    return this.props.items !== nextProp.items;
  }

  // It enables your component to capture some information from the DOM
  // (e.g. scroll position) before it is potentially changed
  //refernce link :https://www.digitalocean.com/community/tutorials/react-get-derived-state
  getSnapshotBeforeUpdate(prevProps: ItemModel, prevState: any) {
    const current = this.listReference.current;
    console.log(
      "TODOLIST - getSnapshotBeforeUpdate (Update) ",
      current && current.scrollHeight,
      current && current.scrollTop
    );
    if (prevProps.items.length < this.props.items.length)
      return current && current.scrollHeight - current.scrollTop;
    return null;
  }

  componentDidUpdate(prevProp: ItemModel, prevState: any, snapshot: any) {
    const list: any = this.listReference.current;
    list.scrollTop = list.scrollHeight - snapshot;
    console.log("TODOLIST - componentDidUpdate (Update) ", list.scrollTop);
  }

  // using complate handler  to  avoid arrow function callbacks for events inside render methos. - best practice.

  onTodoItemComplete = (id: number) => {
    this.props.onComplete(id);
  };
}
