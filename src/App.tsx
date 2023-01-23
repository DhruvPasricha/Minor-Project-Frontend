import React, { createContext, useState } from 'react';
import SideBar from '../src/Components/SideBar/SideBar';
import NavBar from './Components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import MyFiles from './Pages/MyFiles/MyFiles';
import IncomingFiles from './Pages/IncomingFiles/IncomingFiles';
import ReceivedFiles from './Pages/FilesWithMe/FilesWithMe';
import SentFiles from './Pages/FilesSent/FilesSent';
import TrackFiles, { TrackFileDataResponse } from './Pages/TrackFiles/TrackFiles';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/LoginPage/LoginPage';
import { API } from './Util/API/API';
import { useEffect } from 'react';
import './App.css';

export const UserContext = createContext<UserContextType>({});

const App = () => {
    const [userState, userDispatch] = useState<UserStateType>({ userId: 1 });
    const { userId } = userState; 
    useEffect(() => {
        const getUserFilesInfo = async () => {
            try {
                const response = await API.GET(`/files/user/${userId}`);
                userDispatch({ ...userState, filesData: response.data.data });
            } catch (e) {}
        };
        getUserFilesInfo();
    }, []);
    const isLoginPage = window.location.pathname === '/login';
    return (
        <UserContext.Provider value={{ userState, userDispatch }}>
            <div
                id="app"
                style={{
                    justifyContent: isLoginPage ? 'center' : 'unset',
                    alignItems: isLoginPage ? 'center' : 'unset',
                }}
                className="no-scroll"
            >
                {!isLoginPage && <SideBar />}
                <div>
                    {!isLoginPage && <NavBar />}
                    <Routes>
                        <Route path="/" element={<MyFiles />} />
                        <Route path="/my-files" element={<MyFiles />} />
                        <Route path="/incoming-files" element={<IncomingFiles />} />
                        <Route path="/received-files" element={<ReceivedFiles />} />
                        <Route path="/sent-files" element={<SentFiles />} />
                        <Route path="/track-files" element={<TrackFiles />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </UserContext.Provider>
    );
};

export interface UserStateType {
    filesData?: any;
    trackFileData?: TrackFileDataResponse;
    userId: 1;
}
export interface UserContextType {
    userState?: UserStateType;
    userDispatch?: any;
}

export interface File {
    fileSubject: string;
    fileId: string | number;
    createdBy: string | number;
    createdByUserId: string | number;
    createdAt: string;
    assignedBy: string | number;
    assignedByUserId: string | number;
    assignedAt: string;
    assignedForUserId: string | number;
    assignedFor: string;
    status: 'CLOSED' | 'DISPATCHED' | 'RECEIVED' | 'CREATED';
}

export default App;
