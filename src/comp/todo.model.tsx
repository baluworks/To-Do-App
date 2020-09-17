export interface State {
  items: Array<Item>;
  currentText: string;
}
export interface Item {
  id: number;
  text: string;
  completed: boolean;
}
