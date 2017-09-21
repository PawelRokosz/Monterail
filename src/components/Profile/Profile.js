import React from 'react';
import photo from '../../assets/images/face.png';

class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <div className="profile__container">
          <div className="profile__close">x</div>
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
            <div className="profile__history">
              <div className="profile__history-title text__upper text__upper--b">that's where we have been these 6 months ago</div>
              <div className="profile__history-stats">
                <div className="profile__history-stat profile__history-stat--1"><div><div className="text text__bold">46</div><div className="text__normal text__normal--italic">peers</div></div></div>
                <div className="profile__history-stat profile__history-stat--2"><div><div className="text text__bold">29</div><div className="text__normal text__normal--italic">discussions</div></div></div>
                <div className="profile__history-stat profile__history-stat--3"><div><div className="text text__bold">19</div><div className="text__normal text__normal--italic">findings</div></div></div>
                <div className="profile__history-stat profile__history-stat--4"><div><div className="text text__bold">10</div><div className="text__normal text__normal--italic">questions</div></div></div>
              </div>
              <div className="profile__related-users">
                <div className="profile__related-users-title text__upper text__upper--b">who joined the platform that same period</div>
                <div className="profile__related-users-list">
                  <div className="profile__related-users-user">
                    <div className="profile__related-users-user-backgroud">
                      <div className="profile__related-users-user-img"><img src={photo} alt=""/></div>
                    </div>
                    <div className="profile__related-users-name text__eyecatch text__eyecatch-b">SEN Waweru</div>
                  </div>
                  <div className="profile__related-users-user">
                    <div className="profile__related-users-user-backgroud">
                      <div className="profile__related-users-user-img"><img src={photo} alt="user"/></div>
                    </div>
                    <div className="profile__related-users-name text__eyecatch text__eyecatch-b">Patricia</div>
                  </div>
                  <div className="profile__related-users-user">
                    <div className="profile__related-users-user-backgroud">
                      <div className="profile__related-users-user-img"><img src={photo} alt=""/></div>
                    </div>
                    <div className="profile__related-users-name text__eyecatch text__eyecatch-b">Joseph Alouch</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="profile__footer">
            <div className="profile__footer-title text__upper text__upper--b">the hottest discussions these days</div>
            <div className="profile__footer-background">
              <div className="profile__footer-img"><img src={photo} alt="user"/></div>
              <div className="profile__footer-found"><span className="text__eyecatch text__eyecatch-b">Andrew</span> <span className="text__upper text__upper--b">found the guardian article</span></div>
              <div className="profile__footer-title text__eyecatch text__eyecatch--c">Vegan diet to stop diabetes progress</div>
              <div className="profile__footer-stats text__normal text__normal--italic">
                <span className="text__bold"> 6 peers involved </span>
                <span className="text__bold"> 3 related discussions </span>
                <span className="text__bold"> 3 conversations </span>
                <span className="text__bold"> 19 upvotes </span>
              </div>
          </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Profile;
