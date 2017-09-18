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
              <div className="title__user-box"><span className="title__user">Eva</span> <span className="title__fraze">is asking:</span></div>
              <div className="title__question">Will insulin make patient gain weight?</div>
            </div>
          </div>
          <div className="activities">
            <div className="activities__name">
              <span className="activities__name-text">asked</span>
            </div>
            <MoreActivities/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
          </div>
        </div>
        <div className="informations">
          <div className="informations__info">1 related dissccusion</div>
          <div className="informations__info">6 peers involved</div>
          <div className="informations__info">3 conversations</div>
        </div>
      </div>
    );
  }
}

export default Question;
