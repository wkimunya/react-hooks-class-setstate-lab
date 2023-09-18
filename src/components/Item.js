import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);

    // Initialize the state
    this.state = {
      isInCart: false,
    };

    // Bind the event handler function to this component instance
    this.handleAddToCartClick = this.handleAddToCartClick.bind(this);
  }

  handleAddToCartClick() {
    // Toggle the isInCart state when the button is clicked
    this.setState((prevState) => ({
      isInCart: !prevState.isInCart,
    }));
  }

  render() {
    const { name, category } = this.props;
    const { isInCart } = this.state;

    return (
      <li className={isInCart ? "in-cart" : ""}>
        <span>{name}</span>
        <span className="category">{category}</span>
        <button
          className={isInCart ? "remove" : "add"}
          onClick={this.handleAddToCartClick}
        >
          {isInCart ? "Remove From" : "Add to"} Cart
        </button>
      </li>
    );
  }
}

export default Item;
