import React from 'react';

class SearchForm extends React.Component {
  render() {
    return (
      <form className="searchForm">
        <input className="searchForm__input" type="text" placeholder="Search questions"/>
        <button className="searchForm__submit text__upper text__upper--a" type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
