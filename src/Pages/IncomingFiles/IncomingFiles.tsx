import * as React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import DataTable, { Column } from '../../Components/DataTable/DataTable';

const columns: Column[] = [
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
    fileDetails: any;
    createdDetails: any;
    receivedDetails: any;
    status: any;
}

// const datas = [
//     {
//         subject: 'Test subject for File.io',
//         id: 154263,
//         createdby: 'Sarthak Khandelwal',
//         createdon: '20/01/2023',
//         assignedby: 'Dhruv Pasricha',
//         assignedon: '23/01/2023',
//         status: 'IN PROGRESS',
//     },
//     {
//         subject: 'Test subject for File.io',
//         id: 154263,
//         createdby: 'Dhruv Pasricha',
//         createdon: '20/01/2023',
//         assignedby: 'Sarthak Khandelwal',
//         assignedon: '23/01/2023',
//         status: 'IN PROGRESS',
//     },
//     {
//         subject: 'Test subject for File.io',
//         id: 154263,
//         createdby: 'Dhruv Pasricha',
//         createdon: '20/01/2023',
//         assignedby: 'Sarthak Khandelwal',
//         assignedon: '23/01/2023',
//         status: 'IN PROGRESS',
//     },
//     {
//         subject: 'Test subject for File.io',
//         id: 154263,
//         createdby: 'Dhruv Pasricha',
//         createdon: '20/01/2023',
//         assignedby: 'Sarthak Khandelwal',
//         assignedon: '23/01/2023',
//         status: 'IN PROGRESS',
//     },
//     {
//         subject: 'Test subject for File.io',
//         id: 154263,
//         createdby: 'Dhruv Pasricha',
//         createdon: '20/01/2023',
//         assignedby: 'Sarthak Khandelwal',
//         assignedon: '23/01/2023',
//         status: 'IN PROGRESS',
//     },
//     {
//         subject: 'Test subject for File.io',
//         id: 154263,
//         createdby: 'Dhruv Pasricha',
//         createdon: '20/01/2023',
//         assignedby: 'Sarthak Khandelwal',
//         assignedon: '23/01/2023',
//         status: 'IN PROGRESS',
//     },
//     {
//         subject: 'Test subject for File.io',
//         id: 154263,
//         createdby: 'Dhruv Pasricha',
//         createdon: '20/01/2023',
//         assignedby: 'Sarthak Khandelwal',
//         assignedon: '23/01/2023',
//         status: 'IN PROGRESS',
//     },
//     {
//         subject: 'Test subject for File.io',
//         id: 154263,
//         createdby: 'Dhruv Pasricha',
//         createdon: '20/01/2023',
//         assignedby: 'Sarthak Khandelwal',
//         assignedon: '23/01/2023',
//         status: 'IN PROGRESS',
//     },
//     {
//         subject: 'Test subject for File.io',
//         id: 154263,
//         createdby: 'Dhruv Pasricha',
//         createdon: '20/01/2023',
//         assignedby: 'Sarthak Khandelwal',
//         assignedon: '23/01/2023',
//         status: 'IN PROGRESS',
//     },
//     {
//         subject: 'Test subject for File.io',
//         id: 154263,
//         createdby: 'Dhruv Pasricha',
//         createdon: '20/01/2023',
//         assignedby: 'Sarthak Khandelwal',
//         assignedon: '23/01/2023',
//         status: 'IN PROGRESS',
//     },
//     {
//         subject: 'Test subject for File.io',
//         id: 154263,
//         createdby: 'Dhruv Pasricha',
//         createdon: '20/01/2023',
//         assignedby: 'Sarthak Khandelwal',
//         assignedon: '23/01/2023',
//         status: 'IN PROGRESS',
//     },
//     {
//         subject: 'Test subject for File.io',
//         id: 154263,
//         createdby: 'Dhruv Pasricha',
//         createdon: '20/01/2023',
//         assignedby: 'Sarthak Khandelwal',
//         assignedon: '23/01/2023',
//         status: 'IN PROGRESS',
//     },
//     {
//         subject: 'Test subject for File.io',
//         id: 154263,
//         createdby: 'Dhruv Pasricha',
//         createdon: '20/01/2023',
//         assignedby: 'Sarthak Khandelwal',
//         assignedon: '23/01/2023',
//         status: 'IN PROGRESS',
//     },
//     {
//         subject: 'Test subject for File.io',
//         id: 154263,
//         createdby: 'Dhruv Pasricha',
//         createdon: '20/01/2023',
//         assignedby: 'Sarthak Khandelwal',
//         assignedon: '23/01/2023',
//         status: 'IN PROGRESS',
//     },
// ];

const data = [
    {
        fileDetails: 'FileDetails',
        createdDetails: 'createdDetails',
        receivedDetails: 'receivedDetails',
        status: 'status',
    },
    {
        fileDetails: 'FileDetails',
        createdDetails: 'createdDetails',
        receivedDetails: 'receivedDetails',
        status: 'status',
    },
    {
        fileDetails: 'FileDetails',
        createdDetails: 'createdDetails',
        receivedDetails: 'receivedDetails',
        status: 'status',
    },
    {
        fileDetails: 'FileDetails',
        createdDetails: 'createdDetails',
        receivedDetails: 'receivedDetails',
        status: 'status',
    },
    {
        fileDetails: 'FileDetails',
        createdDetails: 'createdDetails',
        receivedDetails: 'receivedDetails',
        status: 'status',
    },
    {
        fileDetails: 'FileDetails',
        createdDetails: 'createdDetails',
        receivedDetails: 'receivedDetails',
        status: 'status',
    },
    {
        fileDetails: 'FileDetails',
        createdDetails: 'createdDetails',
        receivedDetails: 'receivedDetails',
        status: 'status',
    },
    {
        fileDetails: 'FileDetails',
        createdDetails: 'createdDetails',
        receivedDetails: 'receivedDetails',
        status: 'status',
    },
    {
        fileDetails: 'FileDetails',
        createdDetails: 'createdDetails',
        receivedDetails: 'receivedDetails',
        status: 'status',
    },
    {
        fileDetails: 'FileDetails',
        createdDetails: 'createdDetails',
        receivedDetails: 'receivedDetails',
        status: 'status',
    },
    {
        fileDetails: 'FileDetails',
        createdDetails: 'createdDetails',
        receivedDetails: 'receivedDetails',
        status: 'status',
    },
];
export default function IncomingFiles() {
    return <DataTable columns={columns} rowWiseData={data}></DataTable>;
}
