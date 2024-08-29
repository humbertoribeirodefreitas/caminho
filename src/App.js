//import {StatusBar} from 'react-native';
import React from 'react';
//import './App.css';
import {Home} from './components/Home';

function App() {
  return (
    <>
    <Statusbar
    barStyle="light-content"
    backgrondcolor="transparent"
    translucent/>
    
   <Home/>
    </>
  );
}

export default App;
