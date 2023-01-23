import React, { useContext, useEffect, useState } from 'react';
import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { API } from '../../Util/API/API';

const SearchBox = (props: SearchBoxPropsType) => {
    const userContext = useContext(UserContext);
    const { userState, userDispatch } = userContext;
    const trackFileData = userState?.trackFileData;
    const navigate = useNavigate();
    useEffect(() => {
        if (trackFileData) {
            navigate('/track-files');
        }
    }, [trackFileData]);
    const getTrackFileData = async (fileId: string) => {
        if (!fileId) return;
        try {
            const response = await API.GET(`/files/track/${fileId}`);
            userDispatch({ ...userState, trackFileData: response.data.data });
        } catch (error) {
            console.log(error);
        }
    };
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
                    onKeyDown={async (event) => {
                        if (event.key === 'Enter') {
                            // on success
                            await getTrackFileData(searchValue);
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
