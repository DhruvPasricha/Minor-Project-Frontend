import React, { useContext } from 'react';
import { Box, Stepper, Step, StepLabel, Typography } from '@mui/material';
import FILE_STATUS from '../../Components/FileStatus/FileStatus';
import { UserContext } from '../../App';
import { getDate, getTime } from '../../Util/Common/Common';

const getFileStepLabel = (data: FileAction) => {
    const { action, actionDoneBy, actionDoneFor, actionDoneAt } = data;

    const message = {
        CREATED: `Created by ${actionDoneBy}`,
        RECEIVED: `Received by ${actionDoneBy} from ${actionDoneFor}`,
        DISPATCHED: `Assigned by ${actionDoneBy} to ${actionDoneFor}`,
        CLOSED: `Closed by ${actionDoneBy}`,
    };

    return <StepLabel optional={<Typography variant="caption">on {getDate(actionDoneAt)} at {getTime(actionDoneAt)}</Typography>}>{message[action]}</StepLabel>;
};

const TrackFiles = () => {
    const userContext = useContext(UserContext);
    const { userState } = userContext;
    if (!userState) return <></>;
    const { trackFileData } = userState;
    if (!trackFileData) return <></>;
    const steps = trackFileData?.actions || [];
    return steps?.length ? (
        <Box sx={{ padding: '20px 60px 0 60px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h3">{trackFileData?.fileSubject}</Typography> {FILE_STATUS[trackFileData.status]}
            </div>

            <Typography sx={{ paddingLeft: '10px', fontWeight: 'bold', marginBottom: '10px' }}>{trackFileData?.fileId}</Typography>

            <Stepper activeStep={-1} orientation="vertical" sx={{ maxHeight: '70vh', overflowY: 'auto' }}>
                {steps.map((step, index) => (
                    <Step key={index}>{getFileStepLabel(step)}</Step>
                ))}
            </Stepper>
        </Box>
    ) : (
        <></>
    );
};

export default TrackFiles;

interface FileAction {
    action: 'CLOSED' | 'DISPATCHED' | 'RECEIVED' | 'CREATED';
    actionDoneBy: any;
    actionDoneFor: any;
    actionDoneAt: any;
}

export interface TrackFileDataResponse {
    fileId: any;
    fileSubject: any;
    status: 'CLOSED' | 'DISPATCHED' | 'RECEIVED' | 'CREATED';
    actions: FileAction[];
}
