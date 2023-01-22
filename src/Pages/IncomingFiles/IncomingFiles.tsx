import * as React from 'react';
import DataTable, { Column } from '../../Components/DataTable/DataTable';
import FILE_STATUS from '../../Components/FileStatus/FileStatus';
import TableCell from '../../Components/TableCell/TabelCell';

const columns: Column[] = [
    { id: 'fileDetails', label: 'File' },
    { id: 'createdDetails', label: 'Created' },
    {
        id: 'receivedDetails',
        label: 'Received',
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

const data = [
    {
        fileDetails: <TableCell topText={<strong>USICT Attendance File</strong>} bottomText="19919199191" showAvatar={true} />,
        createdDetails: <TableCell topText="Sarthak Khandelwal" bottomText="20/11/21" />,
        receivedDetails: <TableCell topText="Dhruv Pasricha" bottomText="20/11/22" />,
        status: FILE_STATUS.CLOSED,
    },
    {
        fileDetails: <TableCell topText={<strong>USICT Attendance File</strong>} bottomText="19919199191" showAvatar={true} />,
        createdDetails: <TableCell topText="Sarthak Khandelwal" bottomText="20/11/21" />,
        receivedDetails: <TableCell topText="Dhruv Pasricha" bottomText="20/11/22" />,
        status: FILE_STATUS.IN_PROCESS,
    },
    {
        fileDetails: <TableCell topText={<strong>USICT Attendance File</strong>} bottomText="19919199191" showAvatar={true} />,
        createdDetails: <TableCell topText="Sarthak Khandelwal" bottomText="20/11/21" />,
        receivedDetails: <TableCell topText="Dhruv Pasricha" bottomText="20/11/22" />,
        status: FILE_STATUS.CLOSED,
    },
    {
        fileDetails: <TableCell topText={<strong>USICT Attendance File</strong>} bottomText="19919199191" showAvatar={true} />,
        createdDetails: <TableCell topText="Sarthak Khandelwal" bottomText="20/11/21" />,
        receivedDetails: <TableCell topText="Dhruv Pasricha" bottomText="20/11/22" />,
        status: FILE_STATUS.IN_PROCESS,
    },
    {
        fileDetails: <TableCell topText={<strong>USICT Attendance File</strong>} bottomText="19919199191" showAvatar={true} />,
        createdDetails: <TableCell topText="Sarthak Khandelwal" bottomText="20/11/21" />,
        receivedDetails: <TableCell topText="Dhruv Pasricha" bottomText="20/11/22" />,
        status: FILE_STATUS.IN_PROCESS,
    },
    {
        fileDetails: <TableCell topText={<strong>USICT Attendance File</strong>} bottomText="19919199191" showAvatar={true} />,
        createdDetails: <TableCell topText="Sarthak Khandelwal" bottomText="20/11/21" />,
        receivedDetails: <TableCell topText="Dhruv Pasricha" bottomText="20/11/22" />,
        status: FILE_STATUS.IN_PROCESS,
    },
    {
        fileDetails: <TableCell topText={<strong>USICT Attendance File</strong>} bottomText="19919199191" showAvatar={true} />,
        createdDetails: <TableCell topText="Sarthak Khandelwal" bottomText="20/11/21" />,
        receivedDetails: <TableCell topText="Dhruv Pasricha" bottomText="20/11/22" />,
        status: FILE_STATUS.CLOSED,
    },
    {
        fileDetails: <TableCell topText={<strong>USICT Attendance File</strong>} bottomText="19919199191" showAvatar={true} />,
        createdDetails: <TableCell topText="Sarthak Khandelwal" bottomText="20/11/21" />,
        receivedDetails: <TableCell topText="Dhruv Pasricha" bottomText="20/11/22" />,
        status: FILE_STATUS.CLOSED,
    },
];
export default function IncomingFiles() {
    return <DataTable columns={columns} rowWiseData={data}></DataTable>;
}
