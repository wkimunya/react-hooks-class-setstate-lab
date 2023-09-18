import React, { Component } from "react";
import Item from "./Item";

class ShoppingList extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      selectedCategory: "All",
    };

    // Bind the event handler function to this component instance
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleCategoryChange(event) {
    // event.target.value will be the value selected by the user
    this.setState({ selectedCategory: event.target.value });
  }

  render() {
    const { items } = this.props;
    const { selectedCategory } = this.state;

    // Filter the items based on the selected category
    const itemsToDisplay = items.filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    });

    return (
      <div className="ShoppingList">
        <div className="Filter">
          <select name="filter" onChange={this.handleCategoryChange}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <ul className="Items">
          {itemsToDisplay.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
