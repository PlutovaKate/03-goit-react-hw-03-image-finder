import { Component } from 'react';

class SearchBar extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.searchValue.value;
    this.props.onSubmit(value);
  };
  render() {
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handleSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            name="searchValue"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
