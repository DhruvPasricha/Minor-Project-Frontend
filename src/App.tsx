import React from 'react'
import SideBar from '../src/Components/SideBar/SideBar'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import MyFiles from './Pages/MyFiles'
import IncomingFiles from './Pages/IncomingFiles/IncomingFiles'
import ReceivedFiles from './Pages/ReceivedFiles'
import SentFiles from './Pages/SentFiles'
import TrackFiles from './Pages/TrackFiles'
import NotFound from './Pages/NotFound'
import Logout from './Pages/Logout'

const App = () => {
  return (
    <div id='app' className='no-scroll'>
      <SideBar />
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<MyFiles />} />
          <Route path='/my-files' element={<MyFiles />} />
          <Route path='/incoming-files' element={<IncomingFiles />} />
          <Route path='/received-files' element={<ReceivedFiles />} />
          <Route path='/sent-files' element={<SentFiles />} />
          <Route path='/track-files' element={<TrackFiles />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      {/* <LoginPage /> */}
      {/* <FileTable /> */}
      {/* <FileHistory /> */}
      {/* <ProfileCard /> */}
    </div>
  )
}

export default App
