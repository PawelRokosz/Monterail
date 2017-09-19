import React from 'react';
import Comment from './Comment';
import MoreActivities from './MoreActivities';
import photo from '../../assets/images/face.png'

class Question extends React.Component {
  render() {
    return (
      <div className="question">
        <div className="question__main">
          <div className="title">
            <div className="title__photo"><img src={photo} alt="User"/></div>
            <div>
              <div><span className="text__eyecatch">Eva</span> <span className="text__upper text__upper--a">is asking:</span></div>
              <div className="text__eyecatch text__eyecatch--c">Will insulin make patient gain weight?</div>
            </div>
          </div>
          <div className="activities">
            <div className="activities__name">
              <span className="activities__name-text text__upper text__upper--a">asked</span>
            </div>
            <MoreActivities/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
          </div>
        </div>
        <div className="informations">
          <div className="text text__bold text__bold--b">1 related dissccusion</div>
          <div className="text text__bold text__bold--b">6 peers involved</div>
          <div className="text text__bold text__bold--b">3 conversations</div>
        </div>
      </div>
    );
  }
}

export default Question;
