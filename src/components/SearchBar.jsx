import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    term: "",
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    //    console.log(this.state.term)
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form" action="">
          <div className="field">
            <label htmlFor="SearchBar">Image Search</label>
            <input
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              type="text"
              name="SearchBar"
              id="SearchBar"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
