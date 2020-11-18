import React, { Component } from 'react';
import "./search-panel.css";

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  onSearchTerm = (e) => {
    const { onSearchFilter } = this.props;
    const term = e.target.value;
    this.setState({ term });
    onSearchFilter(term);
  };

  render() {
    return (
      <input className="search-input" placeholder='Search'
        onChange={this.onSearchTerm}
        value={this.state.term} />
    );
  }
}