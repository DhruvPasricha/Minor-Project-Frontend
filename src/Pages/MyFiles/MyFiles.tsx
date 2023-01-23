import React, { useContext } from 'react';
import DataTable, { Column } from '../../Components/DataTable/DataTable';
import FILE_STATUS from '../../Components/FileStatus/FileStatus';
import TableCell from '../../Components/DataTable/TableCell/TabelCell';
import { UserContext, File } from '../../App';
import { getDate, getTime } from '../../Util/Common/Common';
import { closeFileSwal } from '../../Components/FileSwals/CloseFileSwal';

export default function MyFiles() {
    const userContext = useContext(UserContext);
    const filesCreated = userContext?.userState?.filesData?.created;
    const tableData = filesCreated?.map((file: File) => {
        return {
            fileDetails: <TableCell topText={<strong>{file.fileSubject}</strong>} bottomText={file.fileId} showAvatar={true} />,
            createdDetails: <TableCell topText={<strong>{getDate(file.createdAt)}</strong>} bottomText={getTime(file.createdAt)} />,
            status: FILE_STATUS[file.status],
            onClick: () => closeFileSwal(file, userContext?.userState),
        };
    });
    const columns: Column[] = [
        { id: 'fileDetails', label: 'File Details' },
        { id: 'createdDetails', label: 'Created On' },
        { id: 'status', label: 'Status' },
    ];
    return <DataTable columns={columns} rowWiseData={tableData}></DataTable>;
}
