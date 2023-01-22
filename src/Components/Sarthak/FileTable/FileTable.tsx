import * as React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import TableTileSwal from './TableTileSwal';
import { Column } from '../../DataTable/DataTable';

const columns: readonly Column[] = [
    { id: 'fileDetails', label: 'File Details' },
    { id: 'createdDetails', label: 'Created By' },
    {
        id: 'receivedDetails',
        label: 'Received On',
    },
    {
        id: 'status',
        label: 'Status',
        format: (value: number) => value.toLocaleString('en-US'),
    },
];

interface Data {
    fileDetails: JSX.Element;
    createdDetails: JSX.Element;
    receivedDetails: JSX.Element;
    status: JSX.Element;
}

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
];

export default function FileTable() {
    // Page
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id}>
                                    <strong>{column.label}</strong>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {datas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1}>
                                    {columns.map((column, index) => {
                                        console.log(data);
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                test
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination rowsPerPageOptions={[10, 25, 100]} component="div" count={datas.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
        </Paper>
    );
}
