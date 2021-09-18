import React, { Component } from 'react';
import ReactLogo from './svgs/reactlogo.svg';

interface AppProps {

}

const App = ({}: AppProps) => {
    return (
        <div id="app">
            <h1>Hello World!</h1>
            <img src={ReactLogo}/>
        </div>
    );
}

export default App;