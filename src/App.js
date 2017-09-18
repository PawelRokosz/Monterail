import React from 'react';
import './assets/styles/css/main.css';

import Nav from './components/Nav/Nav';
import QuestionsContainer from './components/Questions/QuestionsContainer';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Nav/>
        <QuestionsContainer/>
      </div>
    );
  }
}

export default App;
