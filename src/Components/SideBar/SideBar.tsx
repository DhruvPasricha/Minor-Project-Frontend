import React from 'react'
import {
  Box,
  Drawer,
  Avatar,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { MoveToInbox, Mail } from '@mui/icons-material'
import { deepPurple } from '@mui/material/colors'
import './SideBar.css'

const SideBar = () => {
  const drawerWidth = 240
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
        variant='permanent'
        anchor='left'
      >
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          sx={{ pt: 2, pb: 2 }}
        >
          <div style={{ paddingTop: '5px', paddingRight: '10px' }}>
            <Mail />
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
        <Divider />
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          sx={{ pt: 2, pb: 2 }}
        >
          <Avatar sx={{ bgcolor: deepPurple[500], width: 120, height: 120 }}>
            DP
          </Avatar>
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
          {[
            'My Files',
            'Incoming Files',
            'Files with me',
            'Sent',
            'Track File',
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Settings'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MoveToInbox />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}

export default SideBar
