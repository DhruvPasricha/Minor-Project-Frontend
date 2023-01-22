import * as React from 'react';
import { createTheme, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Theme, ThemeProvider } from '@mui/material';
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
                    <TableBody>
                        {rowWiseData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((curRowData: any) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1}>
                                    {columns.map((column, index) => {
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
                </Table>
            </TableContainer>
            <Stack alignItems="center">
                <TablePagination rowsPerPageOptions={[10, 25, 100]} component="div" count={rowWiseData.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
            </Stack>
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
