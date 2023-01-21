import React from 'react'
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'

const FileHistory = () => {
  const empData = [
    {
      empId: 123541,
      name: 'Dhruv Pasricha',
    },
    {
      empId: 541312,
      name: 'Sarthak Khandelwal',
    },
  ]
  const fileData = {
    fileNumber: 'GGSIPU/USICT/415724',
    fileSubject: 'Test file for file.io',
    createdBy: 123541,
    currentlyWith: 541312,
    createdOn: '15/01/2023',
    status: 1,
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'end',
        width: '100%',
        height: '100vh',
      }}
    >
      <Card
        elevation={2}
        sx={{
          minWidth: '80vw',
          minHeight: '80vh',
          padding: '20px 30px 40px 30px',
          borderRadius: '20px',
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ height: '140px', width: '140px' }}
              aria-label='profile'
            >
              P
            </Avatar>
          }
          titleTypographyProps={{ variant: 'h3' }}
          title='Dhruv Pasricha'
          subheaderTypographyProps={{ fontSize: '16px' }}
          subheader='164752'
        />
        <CardContent>
          <Typography fontWeight='bold' variant='h5' component='div'>
            {fileData.fileNumber}
          </Typography>
          <Typography
            sx={{ fontSize: 14, mb: 1.5 }}
            color='text.secondary'
            gutterBottom
          >
            Created on: {fileData.createdOn}
          </Typography>
          <Typography sx={{ mb: 1.5 }}>
            <span style={{ fontWeight: 'bold' }}>Subject: </span>
            {fileData.fileSubject}
          </Typography>
          <Typography variant='body2'>
            Created by:{' '}
            {empData.find((emp) => emp.empId === fileData.createdBy)?.name}
            <br />
            Currently with:{' '}
            {empData.find((emp) => emp.empId === fileData.currentlyWith)?.name}
          </Typography>
        </CardContent>
        <br />
      </Card>
    </div>
  )
}

export default FileHistory
