import React from 'react';
import './App.css';
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { Route } from "react-router-dom";
import Login from "./components/Login/Login";

initializeIcons();

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/main" component={Main}/>
      <Route exact path="/" component={Main}/> {/* eigentlich Login}*/}
      <Footer />
    </div>
  );
}

export default App;
