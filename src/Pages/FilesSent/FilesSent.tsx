import React, { useContext } from 'react';
import DataTable, { Column } from '../../Components/DataTable/DataTable';
import FILE_STATUS from '../../Components/FileStatus/FileStatus';
import TableCell from '../../Components/DataTable/TableCell/TabelCell';
import { UserContext, File } from '../../App';

export default function SentFiles() {
    const userContext = useContext(UserContext);
    const myFiles = userContext?.userState?.filesData?.sent;
    const tableData = myFiles?.map((file: File) => {
        return {
            fileDetails: <TableCell topText={<strong>{file.fileSubject}</strong>} bottomText={file.fileId} showAvatar={true} />,
            createdDetails: <TableCell topText={<strong>{file.createdBy}</strong>} bottomText={file.createdAt} />,
            status: FILE_STATUS[file.status],
        };
    });
    const columns: Column[] = [
        { id: 'fileDetails', label: 'File Details' },
        { id: 'createdDetails', label: 'Created By' },
        { id: 'status', label: 'Status' },
    ];
    return tableData && <DataTable columns={columns} rowWiseData={tableData}></DataTable>;
}
