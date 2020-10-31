import React from "react";

interface IAddTodo {
  currentText: string;
  handleChange: Function;
  onHandleSubmit: Function;
  length: number;
}
export const AddTodo: React.FC<IAddTodo> = ({
  currentText,
  handleChange,
  onHandleSubmit,
  length
}) => {
  return (
    <div>
      <label htmlFor="todo_text_box">Add Your Items here : </label>
      <input
        type="text"
        name="todo_text_box"
        id="todo_text_box"
        value={currentText}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button
        onClick={(e) => {
          onHandleSubmit(e);
        }}
      >
        Add {length} #Item
      </button>
    </div>
  );
};
