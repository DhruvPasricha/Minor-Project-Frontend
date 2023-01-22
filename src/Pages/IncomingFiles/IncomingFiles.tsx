import * as React from 'react'
import DataTable, { Column } from '../../Components/DataTable/DataTable'
import FILE_STATUS from '../../Components/FileStatus/FileStatus'
import TableCell from '../../Components/DataTable/TableCell/TabelCell'
import { ReceiveFileSwal } from '../../Components/FileSwals/ReceiveFileSwal'

const columns: Column[] = [
  { id: 'fileDetails', label: 'File Details' },
  { id: 'createdDetails', label: 'Created By' },
  { id: 'receivedDetails', label: 'Assigned By' },
  {
    id: 'status',
    label: 'Status',
    format: (value: number) => value.toLocaleString('en-US'),
  },
]

export default function IncomingFiles() {
  return <DataTable columns={columns} rowWiseData={tableData}></DataTable>
}

const receiveFileData = [
  {
    subject: 'Test subject for File.io',
    id: 154263,
    createdby: 'Sarthak Khandelwal',
    createdon: '20/01/2023',
    assignedby: 'Dhruv Pasricha',
    assignedon: '23/01/2023',
    status: 'IN PROGRESS',
  },
]

const tableData = [
  {
    fileDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].subject}</strong>}
        bottomText={receiveFileData[0].id}
        showAvatar={true}
      />
    ),
    createdDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].createdby}</strong>}
        bottomText={receiveFileData[0].createdon}
      />
    ),
    receivedDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].assignedby}</strong>}
        bottomText={receiveFileData[0].assignedon}
      />
    ),
    status: FILE_STATUS.CLOSED,
    onClick: () => ReceiveFileSwal(receiveFileData[0]),
  },
  {
    fileDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].subject}</strong>}
        bottomText={receiveFileData[0].id}
        showAvatar={true}
      />
    ),
    createdDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].createdby}</strong>}
        bottomText={receiveFileData[0].createdon}
      />
    ),
    receivedDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].assignedby}</strong>}
        bottomText={receiveFileData[0].assignedon}
      />
    ),
    status: FILE_STATUS.IN_PROCESS,
    onClick: () => ReceiveFileSwal(receiveFileData[0]),
  },
  {
    fileDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].subject}</strong>}
        bottomText={receiveFileData[0].id}
        showAvatar={true}
      />
    ),
    createdDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].createdby}</strong>}
        bottomText={receiveFileData[0].createdon}
      />
    ),
    receivedDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].assignedby}</strong>}
        bottomText={receiveFileData[0].assignedon}
      />
    ),
    status: FILE_STATUS.IN_PROCESS,
    onClick: () => ReceiveFileSwal(receiveFileData[0]),
  },
  {
    fileDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].subject}</strong>}
        bottomText={receiveFileData[0].id}
        showAvatar={true}
      />
    ),
    createdDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].createdby}</strong>}
        bottomText={receiveFileData[0].createdon}
      />
    ),
    receivedDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].assignedby}</strong>}
        bottomText={receiveFileData[0].assignedon}
      />
    ),
    status: FILE_STATUS.IN_PROCESS,
    onClick: () => ReceiveFileSwal(receiveFileData[0]),
  },
  {
    fileDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].subject}</strong>}
        bottomText={receiveFileData[0].id}
        showAvatar={true}
      />
    ),
    createdDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].createdby}</strong>}
        bottomText={receiveFileData[0].createdon}
      />
    ),
    receivedDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].assignedby}</strong>}
        bottomText={receiveFileData[0].assignedon}
      />
    ),
    status: FILE_STATUS.IN_PROCESS,
    onClick: () => ReceiveFileSwal(receiveFileData[0]),
  },
  {
    fileDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].subject}</strong>}
        bottomText={receiveFileData[0].id}
        showAvatar={true}
      />
    ),
    createdDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].createdby}</strong>}
        bottomText={receiveFileData[0].createdon}
      />
    ),
    receivedDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].assignedby}</strong>}
        bottomText={receiveFileData[0].assignedon}
      />
    ),
    status: FILE_STATUS.IN_PROCESS,
    onClick: () => ReceiveFileSwal(receiveFileData[0]),
  },
  {
    fileDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].subject}</strong>}
        bottomText={receiveFileData[0].id}
        showAvatar={true}
      />
    ),
    createdDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].createdby}</strong>}
        bottomText={receiveFileData[0].createdon}
      />
    ),
    receivedDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].assignedby}</strong>}
        bottomText={receiveFileData[0].assignedon}
      />
    ),
    status: FILE_STATUS.CLOSED,
    onClick: () => ReceiveFileSwal(receiveFileData[0]),
  },
  {
    fileDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].subject}</strong>}
        bottomText={receiveFileData[0].id}
        showAvatar={true}
      />
    ),
    createdDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].createdby}</strong>}
        bottomText={receiveFileData[0].createdon}
      />
    ),
    receivedDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].assignedby}</strong>}
        bottomText={receiveFileData[0].assignedon}
      />
    ),
    status: FILE_STATUS.IN_PROCESS,
    onClick: () => ReceiveFileSwal(receiveFileData[0]),
  },
  {
    fileDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].subject}</strong>}
        bottomText={receiveFileData[0].id}
        showAvatar={true}
      />
    ),
    createdDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].createdby}</strong>}
        bottomText={receiveFileData[0].createdon}
      />
    ),
    receivedDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].assignedby}</strong>}
        bottomText={receiveFileData[0].assignedon}
      />
    ),
    status: FILE_STATUS.IN_PROCESS,
    onClick: () => ReceiveFileSwal(receiveFileData[0]),
  },
  {
    fileDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].subject}</strong>}
        bottomText={receiveFileData[0].id}
        showAvatar={true}
      />
    ),
    createdDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].createdby}</strong>}
        bottomText={receiveFileData[0].createdon}
      />
    ),
    receivedDetails: (
      <TableCell
        topText={<strong>{receiveFileData[0].assignedby}</strong>}
        bottomText={receiveFileData[0].assignedon}
      />
    ),
    status: FILE_STATUS.IN_PROCESS,
    onClick: () => ReceiveFileSwal(receiveFileData[0]),
  },
]
