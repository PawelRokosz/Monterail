import React from 'react';
import photo from '../../assets/images/face.png';

class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <div className="comment__photo"><img src={photo} alt=""/></div>
        <div className="comment__name text__upper text__upper--a">commented</div>
        <div className="comment__decoration"></div>
      </div>
    );
  }
}

export default Comment;
