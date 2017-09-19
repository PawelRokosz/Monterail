import React from 'react';
import './assets/styles/css/main.css';

import Nav from './components/Nav/Nav';
import QuestionsContainer from './components/Questions/QuestionsContainer';
import Profile from './components/Profile/Profile'


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Nav/>
        <QuestionsContainer/>
        <Profile/>
      </div>
    );
  }
}

export default App;
