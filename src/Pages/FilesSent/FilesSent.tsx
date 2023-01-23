import React, { useContext } from 'react';
import DataTable, { Column } from '../../Components/DataTable/DataTable';
import FILE_STATUS from '../../Components/FileStatus/FileStatus';
import TableCell from '../../Components/DataTable/TableCell/TabelCell';
import { UserContext, File } from '../../App';
import { getDate } from '../../Util/Common/Common';

export default function SentFiles() {
    const userContext = useContext(UserContext);
    const myFiles = userContext?.userState?.filesData?.sent;
    const tableData = myFiles?.map((file: File) => {
        return {
            fileDetails: <TableCell topText={<strong>{file.fileSubject}</strong>} bottomText={file.fileId} showAvatar={true} />,
            createdDetails: <TableCell topText={<strong>{file.createdBy}</strong>} bottomText={getDate(file.createdAt)} />,
            sentDetails: <TableCell topText={<strong>{file.assignedFor}</strong>} bottomText={getDate(file.assignedAt)} />,
            status: FILE_STATUS[file.status],
        };
    });
    const columns: Column[] = [
        { id: 'fileDetails', label: 'File Details' },
        { id: 'createdDetails', label: 'Created By' },
        { id: 'sentDetails', label: 'Assigned To'},
        { id: 'status', label: 'Status' },
    ];
    return <DataTable columns={columns} rowWiseData={tableData}></DataTable>;
}
