import * as React from 'react';
import { List, ListItem, ListItemButton, Divider, ListItemText, ListItemAvatar, Avatar, Typography, Chip, Modal } from '@mui/material';
import FileHistory from './FileHistory';

export default function TableTile(rowData: any) {
    const data = rowData.data;

    // Modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <List sx={{ width: '80vw', bgcolor: 'background.paper' }}>
                <ListItemButton onClick={handleOpen}>
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
                <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <FileHistory />
                </Modal>
                <Divider variant="inset" component="li" />
            </List>
        </>
    );
}
