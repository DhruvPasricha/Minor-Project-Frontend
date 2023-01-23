import React from 'react'
import { Box, Stepper, Step, StepLabel, Typography } from '@mui/material'
import FILE_STATUS from '../Components/FileStatus/FileStatus'

const getFileStepLabel = (data: FileAction) => {
  const { action, actionDoneBy, actionDoneFor, actionDoneAt } = data

  const message = {
    CREATED: `Created by ${actionDoneBy} on ${actionDoneAt}`,
    RECEIVED: `Received by ${actionDoneBy} from ${actionDoneFor}`,
    DISPATCHED: `Assigned by ${actionDoneBy} to ${actionDoneFor}`,
    CLOSED: `Closed by ${actionDoneBy}`,
  }

  return (
    <StepLabel
      optional={<Typography variant='caption'>on {actionDoneAt}</Typography>}
    >
      {message[action]}
    </StepLabel>
  )
}

const TrackFiles = () => {
  const trackFileData: TrackFileDataResponse = {
    fileId: 1,
    fileSubject: 'fileSubject',
    fileStatus: 'DISPATCHED',
    actions: [
      {
        action: 'CREATED',
        actionDoneBy: 'user1',
        actionDoneFor: null,
        actionDoneAt: '23/10/2031',
      },
      {
        action: 'DISPATCHED',
        actionDoneBy: 'user1',
        actionDoneFor: 'user2',
        actionDoneAt: '23/10/2031',
      },
      {
        action: 'RECEIVED',
        actionDoneBy: 'user2',
        actionDoneFor: 'user1',
        actionDoneAt: '23/10/2031',
      },
      {
        action: 'DISPATCHED',
        actionDoneBy: 'user2',
        actionDoneFor: 'user3',
        actionDoneAt: '23/10/2031',
      },
      {
        action: 'RECEIVED',
        actionDoneBy: 'user3',
        actionDoneFor: 'user2',
        actionDoneAt: '23/10/2031',
      },
      {
        action: 'CLOSED',
        actionDoneBy: 'user1',
        actionDoneFor: null,
        actionDoneAt: '23/10/2031',
      },
    ],
  }

  const steps = trackFileData.actions

  return steps?.length ? (
    <Box sx={{ padding: '20px 60px 0 60px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h3'>{trackFileData.fileSubject}</Typography>{' '}
        {FILE_STATUS[trackFileData.fileStatus]}
      </div>

      <Typography
        sx={{ paddingLeft: '10px', fontWeight: 'bold', marginBottom: '10px' }}
      >
        {trackFileData.fileId}
      </Typography>

      <Stepper
        activeStep={-1}
        orientation='vertical'
        sx={{ maxHeight: '70vh', overflowY: 'auto' }}
      >
        {steps.map((step, index) => (
          <Step key={index}>{getFileStepLabel(step)}</Step>
        ))}
      </Stepper>
    </Box>
  ) : (
    <></>
  )
}

export default TrackFiles

interface FileAction {
  action: 'CLOSED' | 'DISPATCHED' | 'RECEIVED' | 'CREATED'
  actionDoneBy: string
  actionDoneFor: string | null
  actionDoneAt: string
}

interface TrackFileDataResponse {
  fileId: number
  fileSubject: string
  fileStatus: 'CLOSED' | 'DISPATCHED' | 'RECEIVED' | 'CREATED'
  actions: FileAction[]
}
