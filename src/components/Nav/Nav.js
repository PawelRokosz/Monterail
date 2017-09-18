import React from 'react';
import SearchForm from './SearchForm';
import Menu from './Menu';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__container">
          <Menu/>
          <SearchForm/>
        </div>
      </nav>
    );
  }
}

export default Nav;
