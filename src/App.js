import React, { Component } from "react";
import TodoItem from './components/TodoItem/todoitem';
import AddItem from './components/AddItem/additem';

class App extends Component {
  state = {
    items: [
      {id:1, name:"Nada", age:24},
      {id:2, name:"Manar", age:21},
      {id:3, name:"Mohamed", age:15}
    ]
  }

  deleteItem =(id) =>{
    // console.log(id);
    // way one to delete item from array and update array using findIndex
    // let items = this.state.items;
    // let i =  items.findIndex(item=> item.id === id)
    // items.splice(i,1)
    // this.setState({items:items})  // or this.setState({items})
        
                    //<---------------------------->

    // way two to delete item from array and update array using fillter  
    let items = this.state.items.filter(item => {
      return(
        item.id !== id
      );
    });
    this.setState({items}); 
  }

  addItem = (item)=>{
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items:items});
  }

  render(){

    return (
      <div className="App container">
        <h1 className="text-center">TodoList App</h1>
        <TodoItem items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem}/>
    </div>
  );
}
}

export default App;
