import React from 'react';
import './App.css';
import Header from './components/header';
import SideBar from './components/sideBar';
import Main from './components/main';
import Stack from 'react-bootstrap/Stack';


function App() {
  return (
    < >
      <Stack direction="horizontal">
        <SideBar />
        <Stack direction="vertical">
          <Header />
          <Main />
        </Stack>
      </Stack>
    </>
  );
}

export default App;
