import React from 'react';
import './App.css';
import Header from './components/header';
import SideBar from './components/sideBar';
import Main from './components/main';
function App() {
  return (
    <div className="container-wrapper">
      <SideBar />
      <div className="container--inner-wrapper">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
