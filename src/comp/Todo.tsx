import React, { Suspense, lazy } from "react";
//import { TodoList } from "./TodoList";
import { Item, State } from "./todo.model";

const TodoList = lazy(() => import("./TodoList"));

export class TODOComp extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onHandleComplete = this.onHandleComplete.bind(this);
    this.state = { items: [], currentText: "" };
  }

  onHandleSubmit(e: any) {
    e.preventDefault();
    if (!this.state.currentText) return 0;
    this.setState((prevState) => {
      const newItem: Item = {
        id: Date.now(),
        text: this.state.currentText,
        completed: true
      };
      return { items: [...prevState.items, newItem], currentText: "" };
    });
  }

  handleChange(e: any) {
    this.setState({ currentText: e.target.value });
  }

  onHandleComplete(id: number) {
    this.setState((prevState) => {
      console.log(prevState);
      const updateItems = prevState.items.map((item) => {
        if (item.id === id) item.completed = !item.completed;
        return item;
      });
      console.log(updateItems);
      return { items: [...updateItems] };
    });
  }

  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <TodoList items={this.state.items} onComplete={this.onHandleComplete} />
        <form>
          <label htmlFor="todo_text_box">Add Your Items here : </label>
          <input
            type="text"
            name="todo_text_box"
            id="todo_text_box"
            value={this.state.currentText}
            onChange={this.handleChange}
          />
          <button onClick={this.onHandleSubmit}>
            Add {this.state.items.length} #Item
          </button>
          <div className={this.state.currentText ? "hide-error" : "show-error"}>
            {" "}
            enter Text to add Item.
          </div>
        </form>
      </Suspense>
    );
  }
}
