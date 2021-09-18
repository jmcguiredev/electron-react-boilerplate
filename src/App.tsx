import React, { Component } from 'react';
import ReactLogo from './assets/reactlogo.svg';

interface AppProps {

}

const App = ({}: AppProps) => {
    return (
        <div id="app">
            <div className="intro-container">
                <h1 className="intro intro-heading">Welcome to your React Electron App</h1>
                <img className="app-icon" src={ReactLogo}/>
            </div>
        </div>
    );
}

export default App;