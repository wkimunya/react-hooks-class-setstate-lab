import React, { Component } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

class App extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      items: itemData,
      isDarkMode: false,
    };

    // Bind the event handler function to this component instance
    this.handleDarkModeClick = this.handleDarkModeClick.bind(this);
  }

  handleDarkModeClick() {
    // Toggle the isDarkMode state when the button is clicked
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  }

  render() {
    const { items, isDarkMode } = this.state;

    return (
      <div className={`App ${isDarkMode ? "dark" : "light"}`}>
        <header>
          <h2>Shopster</h2>
          <button onClick={this.handleDarkModeClick}>
            {isDarkMode ? "Dark" : "Light"} Mode
          </button>
        </header>
        <ShoppingList items={items} />
      </div>
    );
  }
}

export default App;
