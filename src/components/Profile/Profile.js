import React from 'react';
import photo from '../../assets/images/face.png';

class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <div className="profile__container">
          <header className="profile__header">
            <div className="profile__user">
              <img className="profile__user-photo" src={photo} alt=""/>
              <div className="profile__user-name text__eyecatch text__eyecatch-a">Dr. Halima</div>
            </div>
            <div className="profile__info text__standard text__standard--bold">
              <div className="profile__info-text"><span className="profile__info-text-important text__upper text__upper--a">member for</span> 5 months</div>
              <div className="profile__info-text"><span className="profile__info-text-important text__upper text__upper--a">last seen</span> Saturday afternoon</div>
              <div className="profile__info-text"><span className="profile__info-text-important text__upper text__upper--a">activity level</span></div>
            </div>
          </header>
          <div className="profile__main">
            <div className="profile__carousel">
              <div className="carousel-left">l</div>
              <div className=" text text__big">How it all started</div>
              <div className="carousel-right">r</div>
            </div>
          </div>
          <footer className="profile__footer"></footer>
        </div>
      </div>
    );
  }
}

export default Profile;
