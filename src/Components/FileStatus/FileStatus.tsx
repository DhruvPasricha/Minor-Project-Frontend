import { Chip } from '@mui/material';
import React from 'react';

const FileStatus = (props: FileStatusPropsType) => {
    const { statusText, statusColor } = props;
    return (
        <div style={{ paddingTop: '10px' }}>
            <Chip label={statusText} color="primary" style={{ backgroundColor: statusColor, minWidth: '120px' }} />
        </div>
    );
};

const FILE_STATUS = {
    IN_PROCESS: <FileStatus statusText="In Process" statusColor="#FEC400" />,
    CLOSED: <FileStatus statusText="Closed" statusColor="#29CC97" />,
};


interface FileStatusPropsType {
    statusText: string;
    statusColor: string;
}

export default FILE_STATUS;
