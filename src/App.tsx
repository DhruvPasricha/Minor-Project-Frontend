import React from 'react'
import SideBar from '../src/Components/SideBar/SideBar'
import NavBar from './Components/NavBar/NavBar'
import FileHistory from './Components/FileTable/FileHistory'
import './App.css'
import FileTable from './Components/FileTable/FileTable'
import ProfileCard from './Components/ProfileCard/ProfileCard'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div id='app'>
      <SideBar />
      <NavBar />
      <FileTable />
      {/* <FileHistory /> */}
      {/* <ProfileCard /> */}
    </div>
  )
}

export default App
