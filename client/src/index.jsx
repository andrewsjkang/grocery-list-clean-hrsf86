import React from 'react';
import ReactDOM from 'react-dom';
import AddGrocery from './components/AddGrocery.jsx';
import GroceryList from './components/GroceryList.jsx';
import groceryList from '../../database/data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: groceryList.groceryList,
    }
  }
  
  addGroceryToList({ description, quantity }) {
    // if grocery item exists, update quanity
    var updatedList = this.state.list;
    var didUpdate = false;
    for (var i = 0; i < this.state.list.length; i++) {
      if (updatedList[i].description === description) {
        updatedList[i].quantity = quantity;
        didUpdate = true;
      }
    }
    // if grocery item does not exist, push to list
    if (!didUpdate) {
      updatedList.push({
        id: updatedList[updatedList.length - 1].id + 1,
        quantity: quantity,
        description: description
      })
    }

    // update state
    this.setState({list: updatedList});
  }

  render () {
    return (
      <div>
        <h1>Grocery List</h1>
        <div className="add-grocery">
          <AddGrocery addGroceryToList={ this.addGroceryToList.bind(this) }/>
        </div>
        <div className="grocery-list">
          <GroceryList list={ this.state.list }/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));