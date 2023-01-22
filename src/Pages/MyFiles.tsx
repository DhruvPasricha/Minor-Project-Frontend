import * as React from 'react'
import DataTable, { Column } from '../Components/DataTable/DataTable'
import FILE_STATUS from '../Components/FileStatus/FileStatus'
import TableCell from '../Components/DataTable/TableCell/TabelCell'

const columns: Column[] = [
  { id: 'fileDetails', label: 'File Details' },
  { id: 'createdDetails', label: 'Created On' },
  {
    id: 'status',
    label: 'Status',
    format: (value: number) => value.toLocaleString('en-US'),
  },
]

export default function MyFiles() {
  return <DataTable columns={columns} rowWiseData={tableData}></DataTable>
}

const myFileData = [
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
        topText={<strong>{myFileData[0].subject}</strong>}
        bottomText={myFileData[0].id}
        showAvatar={true}
      />
    ),
    createdDetails: (
      <TableCell topText={<strong>{myFileData[0].createdon}</strong>} />
    ),

    status: FILE_STATUS.CLOSED,
  },
  {
    fileDetails: (
      <TableCell
        topText={<strong>{myFileData[0].subject}</strong>}
        bottomText={myFileData[0].id}
        showAvatar={true}
      />
    ),
    createdDetails: (
      <TableCell topText={<strong>{myFileData[0].createdon}</strong>} />
    ),

    status: FILE_STATUS.IN_PROCESS,
  },
  {
    fileDetails: (
      <TableCell
        topText={<strong>{myFileData[0].subject}</strong>}
        bottomText={myFileData[0].id}
        showAvatar={true}
      />
    ),
    createdDetails: (
      <TableCell topText={<strong>{myFileData[0].createdon}</strong>} />
    ),

    status: FILE_STATUS.IN_PROCESS,
  },
  {
    fileDetails: (
      <TableCell
        topText={<strong>{myFileData[0].subject}</strong>}
        bottomText={myFileData[0].id}
        showAvatar={true}
      />
    ),
    createdDetails: (
      <TableCell topText={<strong>{myFileData[0].createdon}</strong>} />
    ),

    status: FILE_STATUS.IN_PROCESS,
  },
  {
    fileDetails: (
      <TableCell
        topText={<strong>{myFileData[0].subject}</strong>}
        bottomText={myFileData[0].id}
        showAvatar={true}
      />
    ),
    createdDetails: (
      <TableCell topText={<strong>{myFileData[0].createdon}</strong>} />
    ),

    status: FILE_STATUS.IN_PROCESS,
  },
  {
    fileDetails: (
      <TableCell
        topText={<strong>{myFileData[0].subject}</strong>}
        bottomText={myFileData[0].id}
        showAvatar={true}
      />
    ),
    createdDetails: (
      <TableCell topText={<strong>{myFileData[0].createdon}</strong>} />
    ),

    status: FILE_STATUS.IN_PROCESS,
  },
  {
    fileDetails: (
      <TableCell
        topText={<strong>{myFileData[0].subject}</strong>}
        bottomText={myFileData[0].id}
        showAvatar={true}
      />
    ),
    createdDetails: (
      <TableCell topText={<strong>{myFileData[0].createdon}</strong>} />
    ),

    status: FILE_STATUS.CLOSED,
  },
  {
    fileDetails: (
      <TableCell
        topText={<strong>{myFileData[0].subject}</strong>}
        bottomText={myFileData[0].id}
        showAvatar={true}
      />
    ),
    createdDetails: (
      <TableCell topText={<strong>{myFileData[0].createdon}</strong>} />
    ),

    status: FILE_STATUS.IN_PROCESS,
  },
  {
    fileDetails: (
      <TableCell
        topText={<strong>{myFileData[0].subject}</strong>}
        bottomText={myFileData[0].id}
        showAvatar={true}
      />
    ),
    createdDetails: (
      <TableCell topText={<strong>{myFileData[0].createdon}</strong>} />
    ),

    status: FILE_STATUS.IN_PROCESS,
  },
  {
    fileDetails: (
      <TableCell
        topText={<strong>{myFileData[0].subject}</strong>}
        bottomText={myFileData[0].id}
        showAvatar={true}
      />
    ),
    createdDetails: (
      <TableCell topText={<strong>{myFileData[0].createdon}</strong>} />
    ),

    status: FILE_STATUS.IN_PROCESS,
  },
]
