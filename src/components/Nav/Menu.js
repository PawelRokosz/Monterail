import React from 'react';

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div className="menu__questions">
          <div className="menu__title text text__upper text__upper--title">Questions</div>
          <button className="menu__addQuestion">+</button>
        </div>
        <div className="menu__options">
          <div className="menu__radios">
            <input className="radioInput" id="shelf" type="radio"/>
            <label className="radioLabel text text__standard text__standard--bold" htmlFor="shelf">My shelf</label>
            <input className="radioInput radioInput--last" id="all" type="radio"/>
            <label className="radioLabelradioLabel text text__standard text__standard--bold" htmlFor="all">All questions</label>
          </div>
          <div className="menu__sort text__normal--italic">
            Sort by: <span className="menu__sortBy text__bold text__bold--a">recent</span> or <span className="menu__sortBy text__eyecatch">hot</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
