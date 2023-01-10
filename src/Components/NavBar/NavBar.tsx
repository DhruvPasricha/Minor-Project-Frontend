import React, { useState } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import "./NavBar.css";

const NavBar = () => {
    const [searchValue, setSearchValue] = useState('');
    return (
        <div className="navBar">
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} placeholder="Search File" />
        </div>
    );
};

export default NavBar;
