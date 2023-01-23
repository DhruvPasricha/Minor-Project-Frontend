import React, { useContext } from 'react';
import DataTable, { Column } from '../../Components/DataTable/DataTable';
import FILE_STATUS from '../../Components/FileStatus/FileStatus';
import TableCell from '../../Components/DataTable/TableCell/TabelCell';
import { ReceiveFileSwal } from '../../Components/FileSwals/ReceiveFileSwal';
import { UserContext, File } from '../../App';

export default function IncomingFiles() {
    const userContext = useContext(UserContext);
    const incomingFiles = userContext?.userState?.filesData?.incoming;
    const tableData = incomingFiles?.map((file: File) => {
        return {
            fileDetails: <TableCell topText={<strong>{file.fileSubject}</strong>} bottomText={file.fileId} showAvatar={true} />,
            createdDetails: <TableCell topText={<strong>{file.createdBy}</strong>} bottomText={file.createdAt} />,
            receivedDetails: <TableCell topText={<strong>{file.assignedBy}</strong>} bottomText={file.assignedAt} />,
            status: FILE_STATUS[file.status],
            onClick: () => ReceiveFileSwal(file),
        };
    });
    if (!tableData) return <></>;
    const columns: Column[] = [
        { id: 'fileDetails', label: 'File Details' },
        { id: 'createdDetails', label: 'Created By' },
        { id: 'receivedDetails', label: 'Assigned By' },
        { id: 'status', label: 'Status' },
    ];
    return <DataTable columns={columns} rowWiseData={tableData}></DataTable>;
}
