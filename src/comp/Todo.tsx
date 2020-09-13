import React from "react";
import { TodoList } from "./TodoList";
import { Item, State } from "./todo.model";

export class TODOComp extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onHandleDelete = this.onHandleDelete.bind(this);
    this.state = { items: [], currentText: "" };
  }
  onHandleSubmit(e: any) {
    e.preventDefault();
    this.setState((prevState) => {
      const newItem: Item = { id: Date.now(), text: prevState.currentText };
      return { items: [...prevState.items, newItem], currentText: "" };
    });
  }
  handleChange(e: any) {
    this.setState({ currentText: e.target.value });
  }
  onHandleDelete(e: any, id: number) {
    console.log("one", id);
  }
  render() {
    return (
      <div>
        <TodoList items={this.state.items} onDelete={this.onHandleDelete} />
        <form>
          <label htmlFor="todo_text_box">Item to be done?</label>
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
        </form>
      </div>
    );
  }
}
