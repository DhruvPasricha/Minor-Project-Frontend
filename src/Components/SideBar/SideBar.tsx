import React from 'react';
import { Box, Drawer, Avatar, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, ButtonBase } from '@mui/material';
import { MoveToInbox, FileCopy, ContentCopy, DriveFolderUpload, Search, Logout } from '@mui/icons-material';
import { deepPurple } from '@mui/material/colors';
import './SideBar.css';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const navigate = useNavigate();
    const drawerWidth = 240;

    const endPoints = [
        { name: 'My Files', endPoint: '/my-files', icon: <FileCopy /> },
        {
            name: 'Incoming Files',
            endPoint: '/incoming-files',
            icon: <MoveToInbox />,
        },
        {
            name: 'Files with me',
            endPoint: '/received-files',
            icon: <ContentCopy />,
        },
        {
            name: 'Sent',
            endPoint: '/sent-files',
            icon: <DriveFolderUpload />,
        },
        { name: 'Track File', endPoint: '/track-files', icon: <Search /> },
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <ButtonBase
                    disableRipple
                    onClick={(event) => {
                        navigate('/');
                    }}
                >
                    <Box display="flex" justifyContent="center" alignItems="center" sx={{ pt: 2, pb: 2 }}>
                        <div style={{ paddingTop: '5px', paddingRight: '10px' }}>
                            <img src="https://i.ibb.co/r6KGGB9/logo.png" alt="logo" height="36px" />
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                // marginBottom: '16px',
                                fontSize: '24px',
                            }}
                        >
                            File.io
                        </div>
                    </Box>
                </ButtonBase>

                <Divider />
                <Box display="flex" justifyContent="center" alignItems="center" sx={{ pt: 2, pb: 2 }}>
                    <Avatar sx={{ bgcolor: deepPurple[500], width: 120, height: 120 }}>DP</Avatar>
                </Box>
                {/* Name */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        // marginBottom: '16px',
                        fontSize: '24px',
                    }}
                >
                    Dhruv Pasricha
                </div>
                {/* Role */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '16px',
                    }}
                >
                    Student
                </div>
                <Divider />
                <List>
                    {endPoints.map((data, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton
                                selected={data.endPoint === window.location.pathname}
                                onClick={() => {
                                    navigate(data.endPoint);
                                    if (data.endPoint === '/track-files') {
                                        (document.getElementsByTagName('input')[0] as HTMLElement)?.focus();
                                    }
                                }}
                            >
                                <ListItemIcon>{data.icon}</ListItemIcon>
                                <ListItemText primary={data.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={() => {
                                window.location.pathname = '/login';
                            }}
                        >
                            <ListItemIcon>
                                <Logout />
                            </ListItemIcon>
                            <ListItemText primary={'Logout'} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
};

export default SideBar;
