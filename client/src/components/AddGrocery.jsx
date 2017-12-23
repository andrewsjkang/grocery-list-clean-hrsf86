import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleButtonClick(props) {
    var descriptionInput = document.getElementById('description');
    var quantityInput = document.getElementById('quantity');
    var toAdd = {
      quantity: quantityInput.value,
      description: descriptionInput.value
    };
    
    props.addGroceryToList(toAdd);

    // input field reset
    descriptionInput.value = '';
    quantityInput.value = '';
  }

  render () {
    return (
      <div>
        <div>
          Description: <input id="description" type="text" name="description"/>
        </div>
        <div>
          Quantity: <input id="quantity"type="text" name="quantity"/>
        </div>
        <div>
          <button
            onClick={ this.handleButtonClick.bind(this, this.props) } 
            type="button"
          >Add Grocery</button>
        </div>
      </div>
    );
  }
}

export default AddGrocery;

