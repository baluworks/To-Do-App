import * as React from "react";
import "./styles.css";
import { ErrorBoundary } from "./ErrorBoundary";
import { TODOComp } from "./comp/Todo";
import { FormPage } from "./FormComp/FormPage";
export default function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <ErrorBoundary>
        <TODOComp />
        <FormPage />
      </ErrorBoundary>
    </div>
  );
}
