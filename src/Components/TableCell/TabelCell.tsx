import React from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

export default function TableCell(props: TableCellProps) {
    const { topText = '', bottomText = '', showAvatar = false } = props;
    return (
        <List>
            <ListItem alignItems="center">
                {showAvatar && (
                    <ListItemAvatar>
                        <Avatar src="" />
                    </ListItemAvatar>
                )}
                <ListItemText
                    primary={topText}
                    secondary={
                        <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                            {bottomText}
                        </Typography>
                    }
                />
            </ListItem>
        </List>
    );
}

interface TableCellProps {
    topText?: any;
    bottomText?: any;
    showAvatar?: boolean;
}
