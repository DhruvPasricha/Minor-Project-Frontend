import React, { useContext, useEffect, useState } from 'react';
import DataTable, { Column } from '../../Components/DataTable/DataTable';
import FILE_STATUS from '../../Components/FileStatus/FileStatus';
import TableCell from '../../Components/DataTable/TableCell/TabelCell';
import { AssignFileSwal } from '../../Components/FileSwals/AssignFileSwal';
import { UserContext, File } from '../../App';
import { getDate } from '../../Util/Common/Common';
import { API } from '../../Util/API/API';

export default function FilesWithMe() {
    const userContext = useContext(UserContext);
    const myFiles = userContext?.userState?.filesData?.currentlyHolding;
    const [possibleUsers, setPossibleUsers] = useState<{ [key: string]: string }>({});
    const tableData = myFiles?.map((file: File) => {
        return {
            fileDetails: <TableCell topText={<strong>{file.fileSubject}</strong>} bottomText={file.fileId} showAvatar={true} />,
            createdDetails: <TableCell topText={<strong>{file.createdBy}</strong>} bottomText={getDate(file.createdAt)} />,
            receivedDetails: <TableCell topText={<strong>{file.assignedBy}</strong>} bottomText={getDate(file.assignedAt)} />,
            status: FILE_STATUS[file.status],
            onClick: () => AssignFileSwal(file, possibleUsers, userContext.userState),
        };
    });
    const columns: Column[] = [
        { id: 'fileDetails', label: 'File Details' },
        { id: 'createdDetails', label: 'Created By' },
        { id: 'receivedDetails', label: 'Assigned By' },
        {
            id: 'status',
            label: 'Status',
            format: (value: number) => value.toLocaleString('en-US'),
        },
    ];
    useEffect(() => {
        const getPossibleUsers = async () => {
            try {
                const response = await API.GET(`/users/all/${userContext.userState?.userId}`);
                setPossibleUsers(response.data.data);
            } catch {
                // ignore for now
            }
        };
        getPossibleUsers();
    }, []);
    return <DataTable columns={columns} rowWiseData={tableData}></DataTable>;
}
