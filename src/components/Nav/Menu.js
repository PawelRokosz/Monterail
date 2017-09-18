import React from 'react';

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div className="menu__questions">
          <div className="menu__title">Questions</div>
          <button className="menu__addQuestion">+</button>
        </div>
        <div className="menu__options">
          <div className="menu__radios">
            <input className="radioInput" id="shelf" type="radio"/>
            <label className="radioLabel" htmlFor="shelf">My shelf</label>
            <input className="radioInput radioInput--last" id="all" type="radio"/>
            <label className="radioLabel" htmlFor="all">All questions</label>
          </div>
          <div className="menu__sort">
            <span>Sort by: <span className="menu__sortBy">recent</span> or <span className="menu__sortBy">hot</span></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
