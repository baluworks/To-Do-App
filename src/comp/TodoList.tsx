
import  React  from 'react';
import {Item} from './todo.model'

interface ItemModel{
  items :Array<Item>,
  
}
export class TodoList extends React.Component<any,ItemModel>{
  constructor(props:ItemModel){
    super(props);
  }
render(){
 
return (<div>
  <ul>
    {this.props.items.map((item: Item)=>
  <li key={item.id}>{item.id}-{item.text} <button  key={item.id} onClick={this.props.onDelete}>del</button></li> 
    )}
  </ul>
</div>)
}
}