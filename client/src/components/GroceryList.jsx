import React from 'react';
import GroceryItem from './GroceryItem.jsx'

const GroceryList = ({ list }) => (
  <div className="groceries">
    { list.map((item) =>
      <div key={ item.id }>
        <GroceryItem item={ item }/>
      </div>
    ) }
  </div>
)

export default GroceryList;

// { list.map(function(grocery) {
//   <GroceryItem item={ grocery } key={ grocery.id }/>
// }) }