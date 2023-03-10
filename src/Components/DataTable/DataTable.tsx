import * as React from 'react';
import { createTheme, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Box, ThemeProvider, Typography } from '@mui/material';
import './DataTable.css';

export default function DataTable(props: DataTableProps) {
    const theme = createTheme({
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        maxHeight: '81vh',
                        width: '80.8vw !important',
                    },
                },
            },
        },
    });

    const { columns, rowWiseData } = props;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const isDataPresent = rowWiseData && rowWiseData.length > 0;

    return (
        <ThemeProvider theme={theme}>
            <TableContainer component={Paper}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id}>
                                    <strong>{column.label}</strong>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    {isDataPresent && (
                        <TableBody>
                            {rowWiseData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((curRowData: any) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} onClick={curRowData?.onClick}>
                                        {columns.map((column) => {
                                            const curValue = curRowData[column.id] || null;
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {curValue}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    )}
                </Table>
            </TableContainer>
            {isDataPresent ? (
                <Stack alignItems="center" justifyContent="end">
                    <TablePagination rowsPerPageOptions={[10, 25, 100]} component="div" count={rowWiseData ? rowWiseData.length : 0} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
                </Stack>
            ) : (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Typography mt={4} variant="h6">
                        <b>No files to show</b>
                    </Typography>
                </Box>
            )}
        </ThemeProvider>
    );
}

export interface Column {
    id: string;
    label: string;
    minWidth?: number;
    align?: 'center';
    format?: (value: number) => string;
}

export interface DataTableProps {
    columns: Column[];
    rowWiseData?: any;
}
