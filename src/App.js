import React from 'react';
import './App.css';
import LoginPage from './components/login page/loginpage';
import Home from './components/HomePage/Home';
import NavBar from './components/NavBar/NavBar';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <div className="App">
      {/* <LoginPage/> */}
      <Home/>
      {/* <NavBar/>
      <MainContent/> */}
    </div>
  );
}

export default App;
