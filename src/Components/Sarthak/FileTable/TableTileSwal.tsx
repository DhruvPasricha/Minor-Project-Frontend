import * as React from 'react';
import { List, ListItem, ListItemButton, Divider, ListItemText, ListItemAvatar, Avatar, Typography, Chip } from '@mui/material';
import Swal from 'sweetalert2';

export default function TableTile(rowData: any) {
    const data = rowData.data;

    return (
        <>
            <List sx={{ width: '80vw', bgcolor: 'background.paper' }}>
                <ListItemButton
                    onClick={() => {
                        Swal.fire({
                            title: data.id,
                            html: `<div >
              <span style="font-weight:bold;">File Subject: </span>
              ${data.subject}
              <br/>
              <br/>
              <span style="font-weight:bold;">Created By: </span>
              ${data.createdby}
              <br/>
              <span style="font-weight:bold;">Currently With: </span>
              ${data.assignedby}
              <br/>
              </div> `,
                            icon: 'info',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'MARK AS RECEIVED',
                            cancelButtonText: 'CANCEL',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire('Received!', 'File has been marked as received.', 'success');
                            }
                        });
                    }}
                >
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="" />
                        </ListItemAvatar>
                        <ListItemText
                            sx={{ width: '200px' }}
                            primary=<strong>{data.subject}</strong>
                            secondary={
                                <React.Fragment>
                                    <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                                        {data.id}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        <ListItemText
                            sx={{ width: '0px' }}
                            primary=<strong>{data.createdby}</strong>
                            secondary={
                                <React.Fragment>
                                    <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                                        {data.createdon}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        <ListItemText
                            sx={{ width: '0px' }}
                            primary=<strong>{data.assignedby}</strong>
                            secondary={
                                <React.Fragment>
                                    <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                                        {data.assignedon}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        <div style={{ paddingTop: '10px' }}>
                            <Chip label={data.status} color="primary" style={{ backgroundColor: '#FEC400', minWidth: '120px' }} />
                        </div>
                    </ListItem>
                </ListItemButton>
                <Divider variant="inset" component="li" />
            </List>
        </>
    );
}
