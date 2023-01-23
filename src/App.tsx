import React, { createContext, useState } from 'react';
import SideBar from '../src/Components/SideBar/SideBar';
import NavBar from './Components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import MyFiles from './Pages/MyFiles/MyFiles';
import IncomingFiles from './Pages/IncomingFiles/IncomingFiles';
import ReceivedFiles from './Pages/FilesWithMe/FilesWithMe';
import SentFiles from './Pages/FilesSent/FilesSent';
import TrackFiles from './Pages/TrackFiles';
import NotFound from './Pages/NotFound';
import Logout from './Pages/Logout';
import { API } from './util/API/API';
import { useEffect } from 'react';
import './App.css';

export const UserContext = createContext<UserContextType>({});

const App = () => {
    const [userState, userDispatch] = useState<UserContextType>({});
    useEffect(() => {
        const getUserFilesInfo = async () => {
            try {
                const response = await API.GET('/files/user/1');
                userDispatch({ ...userState, filesData: response.data.data });
            } catch (e) {}
        };
        getUserFilesInfo();
    }, []);

    return (
        <UserContext.Provider value={userState} >
            <div id="app" className="no-scroll">
                <SideBar />
                <div>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<MyFiles />} />
                        <Route path="/my-files" element={<MyFiles />} />
                        <Route path="/incoming-files" element={<IncomingFiles />} />
                        <Route path="/received-files" element={<ReceivedFiles />} />
                        <Route path="/sent-files" element={<SentFiles />} />
                        <Route path="/track-files" element={<TrackFiles />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                {/* <LoginPage /> */}
                {/* <FileTable /> */}
                {/* <FileHistory /> */}
                {/* <ProfileCard /> */}
            </div>
        </UserContext.Provider>
    );
};

interface UserContextType {
    filesData?: any;
}

export interface File {
    fileSubject: string;
    fileId: string | number;
    createdBy: string | number;
    createdAt: string | number;
    assignedBy: string | number;
    assignedAt: string | number;
    status: 'CLOSED' | 'DISPATCHED' | 'RECEIVED' | 'CREATED';
}

export default App;
