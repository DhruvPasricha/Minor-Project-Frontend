import { Chip } from '@mui/material'
import React from 'react'

const FileStatus = (props: FileStatusPropsType) => {
  const { statusText, statusColor } = props
  return (
    <div style={{ paddingTop: '10px' }}>
      <Chip
        label={statusText}
        color='primary'
        style={{ backgroundColor: statusColor, minWidth: '120px' }}
      />
    </div>
  )
}

const FILE_STATUS = {
  RECEIVED: <FileStatus statusText='IN PROCESS' statusColor='#FEC400' />,
  CREATED: <FileStatus statusText='CREATED' statusColor='#2D9CDB' />,
  CLOSED: <FileStatus statusText='CLOSED' statusColor='#29CC97' />,
  DISPATCHED: <FileStatus statusText='DISPATCHED' statusColor='#9B51E0' />,
}

interface FileStatusPropsType {
  statusText: string
  statusColor: string
}

export default FILE_STATUS
