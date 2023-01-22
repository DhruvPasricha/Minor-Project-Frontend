import React from 'react'
import { Box, Stepper, Step, StepLabel, Typography } from '@mui/material'
import FILE_STATUS from '../Components/FileStatus/FileStatus'

const TrackFiles = () => {
  const data: { [key: string]: string } = {
    subject: 'Test subject for File.io',
    id: '154263',
    status: 'IN_PROGRESS',
  }
  const getSteps = () => {
    const steps = []
    for (let i = 1; i < 10; i++) {
      const stepTrack = {
        createdby: 'Sarthak Khandelwal',
        createdon: '20/01/2023',
        assignedby: 'Dhruv Pasricha',
        assignedon: '23/01/2023',
        assignedto: 'Sarthak Khandelwal',
      }
      steps.push(stepTrack)
    }
    return steps
  }

  const steps = getSteps()

  return (
    <Box sx={{ padding: '20px 60px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h3'>{data.subject}</Typography>{' '}
        {FILE_STATUS.IN_PROCESS}
      </div>

      <Typography
        sx={{ paddingLeft: '10px', fontWeight: 'bold', marginBottom: '10px' }}
      >
        {data.id}
      </Typography>

      <Stepper activeStep={-1} orientation='vertical'>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel
              optional={
                <Typography variant='caption'>on {step.assignedon}</Typography>
              }
            >
              Assigned by {step.assignedby} to {step.assignedto}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default TrackFiles
