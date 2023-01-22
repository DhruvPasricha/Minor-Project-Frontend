import * as React from 'react';
import DataTable, { Column } from '../../Components/DataTable/DataTable';
import FILE_STATUS from '../../Components/FileStatus/FileStatus';
import TableCell from '../../Components/DataTable/TableCell/TabelCell';
import { ReceiveFileSwal } from '../../Components/FileSwals/FileSwals';

const columns: Column[] = [
    { id: 'fileDetails', label: 'File' },
    { id: 'createdDetails', label: 'Created' },
    { id: 'receivedDetails', label: 'Received' },
    { id: 'status', label: 'Status', format: (value: number) => value.toLocaleString('en-US') },
];

export default function IncomingFiles() {
    return <DataTable columns={columns} rowWiseData={tableData}></DataTable>;
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
];

const tableData = [
    {
        fileDetails: <TableCell topText={<strong>USICT Attendance File</strong>} bottomText="19919199191" showAvatar={true} />,
        createdDetails: <TableCell topText="Sarthak Khandelwal" bottomText="20/11/21" />,
        receivedDetails: <TableCell topText="Dhruv Pasricha" bottomText="20/11/22" />,
        status: FILE_STATUS.CLOSED,
        onClick: () => ReceiveFileSwal(receiveFileData[0]),
    },
    {
        fileDetails: <TableCell topText={<strong>USICT Attendance File</strong>} bottomText="19919199191" showAvatar={true} />,
        createdDetails: <TableCell topText="Sarthak Khandelwal" bottomText="20/11/21" />,
        receivedDetails: <TableCell topText="Dhruv Pasricha" bottomText="20/11/22" />,
        status: FILE_STATUS.IN_PROCESS,
        onClick: () => ReceiveFileSwal(receiveFileData[0]),
    },    {
        fileDetails: <TableCell topText={<strong>USICT Attendance File</strong>} bottomText="19919199191" showAvatar={true} />,
        createdDetails: <TableCell topText="Sarthak Khandelwal" bottomText="20/11/21" />,
        receivedDetails: <TableCell topText="Dhruv Pasricha" bottomText="20/11/22" />,
        status: FILE_STATUS.IN_PROCESS,
        onClick: () => ReceiveFileSwal(receiveFileData[0]),
    },    {
        fileDetails: <TableCell topText={<strong>USICT Attendance File</strong>} bottomText="19919199191" showAvatar={true} />,
        createdDetails: <TableCell topText="Sarthak Khandelwal" bottomText="20/11/21" />,
        receivedDetails: <TableCell topText="Dhruv Pasricha" bottomText="20/11/22" />,
        status: FILE_STATUS.IN_PROCESS,
        onClick: () => ReceiveFileSwal(receiveFileData[0]),
    },    {
        fileDetails: <TableCell topText={<strong>USICT Attendance File</strong>} bottomText="19919199191" showAvatar={true} />,
        createdDetails: <TableCell topText="Sarthak Khandelwal" bottomText="20/11/21" />,
        receivedDetails: <TableCell topText="Dhruv Pasricha" bottomText="20/11/22" />,
        status: FILE_STATUS.IN_PROCESS,
        onClick: () => ReceiveFileSwal(receiveFileData[0]),
    },    {
        fileDetails: <TableCell topText={<strong>USICT Attendance File</strong>} bottomText="19919199191" showAvatar={true} />,
        createdDetails: <TableCell topText="Sarthak Khandelwal" bottomText="20/11/21" />,
        receivedDetails: <TableCell topText="Dhruv Pasricha" bottomText="20/11/22" />,
        status: FILE_STATUS.IN_PROCESS,
        onClick: () => ReceiveFileSwal(receiveFileData[0]),
    },    {
        fileDetails: <TableCell topText={<strong>USICT Attendance File</strong>} bottomText="19919199191" showAvatar={true} />,
        createdDetails: <TableCell topText="Sarthak Khandelwal" bottomText="20/11/21" />,
        receivedDetails: <TableCell topText="Dhruv Pasricha" bottomText="20/11/22" />,
        status: FILE_STATUS.IN_PROCESS,
        onClick: () => ReceiveFileSwal(receiveFileData[0]),
    },    {
        fileDetails: <TableCell topText={<strong>USICT Attendance File</strong>} bottomText="19919199191" showAvatar={true} />,
        createdDetails: <TableCell topText="Sarthak Khandelwal" bottomText="20/11/21" />,
        receivedDetails: <TableCell topText="Dhruv Pasricha" bottomText="20/11/22" />,
        status: FILE_STATUS.CLOSED,
        onClick: () => ReceiveFileSwal(receiveFileData[0]),
    },    {
        fileDetails: <TableCell topText={<strong>USICT Attendance File</strong>} bottomText="19919199191" showAvatar={true} />,
        createdDetails: <TableCell topText="Sarthak Khandelwal" bottomText="20/11/21" />,
        receivedDetails: <TableCell topText="Dhruv Pasricha" bottomText="20/11/22" />,
        status: FILE_STATUS.CLOSED,
        onClick: () => ReceiveFileSwal(receiveFileData[0]),
    },
    
];
