import React from 'react';
import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const SearchBox = (props: SearchBoxPropsType) => {
    const navigate = useNavigate();
    const { searchValue, setSearchValue, placeholder = '', style } = props;
    return (
        <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }} style={style}>
            <FormControl sx={{ width: { xs: '100%', md: 224 } }}>
                <OutlinedInput
                    size="small"
                    id="header-search"
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchOutlined />
                        </InputAdornment>
                    }
                    aria-describedby="header-search-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                    placeholder={placeholder}
                    value={searchValue}
                    onChange={(event) => {
                        setSearchValue(event.target.value);
                    }}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            // on success
                            navigate('/track-files');
                        }
                    }}
                />
            </FormControl>
        </Box>
    );
};

interface SearchBoxPropsType {
    searchValue: string;
    setSearchValue: any;
    placeholder?: string;
    style?: any;
}

export default SearchBox;
