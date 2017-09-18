import React from 'react';
import Question from './Question';
import LoadMore from './LoadMore';

class QuestionsContainer extends React.Component {
  render() {
    return (
      <div className="questionsContainer">
        <div className="questionsContainer__inner">
          <Question/>
          <LoadMore/>
        </div>
      </div>
    );
  }
}

export default QuestionsContainer;
