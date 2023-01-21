import React from 'react'
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
} from '@mui/material'

export default function ProfilePage() {
  return (
    <Card sx={{ maxWidth: '345px' }}>
      <CardHeader
        avatar={<Avatar aria-label='profile'>P</Avatar>}
        title='Profile Name'
        subheader='Username'
      />
      <CardMedia
        sx={{ height: 0, paddingTop: '56.25%' }}
        image='profile-image-url'
        title='Profile Image'
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          Profile bio or description
        </Typography>
      </CardContent>
    </Card>
  )
}
