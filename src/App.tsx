import React from 'react';
import SideBar from '../src/Components/SideBar/SideBar';
import NavBar from './Components/NavBar/NavBar';
import './App.css';

const App = () => {
    return (
        <div id="app">
            <SideBar />
            <NavBar />
        </div>
    );
};

export default App;
