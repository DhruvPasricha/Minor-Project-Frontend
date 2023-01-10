import React from 'react';
import { Box, Drawer, Avatar, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { MoveToInbox, Mail } from '@mui/icons-material';
import { deepPurple } from '@mui/material/colors';
import './SideBar.css';

const SideBar = () => {
    const drawerWidth = 240;
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
                <Box display="flex" justifyContent="center" alignItems="center" sx={{ pt: 4, pb: 2 }}>
                    <Avatar sx={{ bgcolor: deepPurple[500], width: 120, height: 120 }}>DP</Avatar>
                </Box>

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
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{index % 2 === 0 ? <MoveToInbox /> : <Mail />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{index % 2 === 0 ? <MoveToInbox /> : <Mail />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};

export default SideBar;
