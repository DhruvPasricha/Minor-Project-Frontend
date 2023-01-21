import * as React from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material'
import TableTileSwal from './TableTileSwal'

interface Column {
  id: 'file_details' | 'created_by' | 'received_on' | 'status'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { id: 'file_details', label: 'File Details', minWidth: 40 },
  { id: 'created_by', label: 'Created By', minWidth: 40 },
  {
    id: 'received_on',
    label: 'Received On',
    minWidth: 40,
    align: 'right',
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 100,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
]

const datas = [
  {
    subject: 'Test subject for File.io',
    id: 154263,
    createdby: 'Sarthak Khandelwal',
    createdon: '20/01/2023',
    assignedby: 'Dhruv Pasricha',
    assignedon: '23/01/2023',
    status: 'IN PROGRESS',
  },
  {
    subject: 'Test subject for File.io',
    id: 154263,
    createdby: 'Dhruv Pasricha',
    createdon: '20/01/2023',
    assignedby: 'Sarthak Khandelwal',
    assignedon: '23/01/2023',
    status: 'IN PROGRESS',
  },
  {
    subject: 'Test subject for File.io',
    id: 154263,
    createdby: 'Dhruv Pasricha',
    createdon: '20/01/2023',
    assignedby: 'Sarthak Khandelwal',
    assignedon: '23/01/2023',
    status: 'IN PROGRESS',
  },
  {
    subject: 'Test subject for File.io',
    id: 154263,
    createdby: 'Dhruv Pasricha',
    createdon: '20/01/2023',
    assignedby: 'Sarthak Khandelwal',
    assignedon: '23/01/2023',
    status: 'IN PROGRESS',
  },
  {
    subject: 'Test subject for File.io',
    id: 154263,
    createdby: 'Dhruv Pasricha',
    createdon: '20/01/2023',
    assignedby: 'Sarthak Khandelwal',
    assignedon: '23/01/2023',
    status: 'IN PROGRESS',
  },
  {
    subject: 'Test subject for File.io',
    id: 154263,
    createdby: 'Dhruv Pasricha',
    createdon: '20/01/2023',
    assignedby: 'Sarthak Khandelwal',
    assignedon: '23/01/2023',
    status: 'IN PROGRESS',
  },
  {
    subject: 'Test subject for File.io',
    id: 154263,
    createdby: 'Dhruv Pasricha',
    createdon: '20/01/2023',
    assignedby: 'Sarthak Khandelwal',
    assignedon: '23/01/2023',
    status: 'IN PROGRESS',
  },
  {
    subject: 'Test subject for File.io',
    id: 154263,
    createdby: 'Dhruv Pasricha',
    createdon: '20/01/2023',
    assignedby: 'Sarthak Khandelwal',
    assignedon: '23/01/2023',
    status: 'IN PROGRESS',
  },
  {
    subject: 'Test subject for File.io',
    id: 154263,
    createdby: 'Dhruv Pasricha',
    createdon: '20/01/2023',
    assignedby: 'Sarthak Khandelwal',
    assignedon: '23/01/2023',
    status: 'IN PROGRESS',
  },
  {
    subject: 'Test subject for File.io',
    id: 154263,
    createdby: 'Dhruv Pasricha',
    createdon: '20/01/2023',
    assignedby: 'Sarthak Khandelwal',
    assignedon: '23/01/2023',
    status: 'IN PROGRESS',
  },
  {
    subject: 'Test subject for File.io',
    id: 154263,
    createdby: 'Dhruv Pasricha',
    createdon: '20/01/2023',
    assignedby: 'Sarthak Khandelwal',
    assignedon: '23/01/2023',
    status: 'IN PROGRESS',
  },
  {
    subject: 'Test subject for File.io',
    id: 154263,
    createdby: 'Dhruv Pasricha',
    createdon: '20/01/2023',
    assignedby: 'Sarthak Khandelwal',
    assignedon: '23/01/2023',
    status: 'IN PROGRESS',
  },
  {
    subject: 'Test subject for File.io',
    id: 154263,
    createdby: 'Dhruv Pasricha',
    createdon: '20/01/2023',
    assignedby: 'Sarthak Khandelwal',
    assignedon: '23/01/2023',
    status: 'IN PROGRESS',
  },
  {
    subject: 'Test subject for File.io',
    id: 154263,
    createdby: 'Dhruv Pasricha',
    createdon: '20/01/2023',
    assignedby: 'Sarthak Khandelwal',
    assignedon: '23/01/2023',
    status: 'IN PROGRESS',
  },
]

export default function FileTable() {
  // Page
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '80vw', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 600, maxWidth: '80vw' }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <strong>{column.label}</strong>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {datas
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data) => {
                return (
                  <TableRow hover>
                    <TableTileSwal data={data} />
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={datas.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
