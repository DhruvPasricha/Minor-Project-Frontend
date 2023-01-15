import AddIcon from '@mui/icons-material/Add'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import SearchBox from '../SearchBox/SearchBox'
import './NavBar.css'
import AccountMenu from './ProfileIcon/ProfileIcon'

const NavBar = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div className='navBar'>
      <div className='navBarTitle'>My Files</div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          placeholder='Search File'
          style={{ width: 'unset' }}
        />
        <div>
          <Button className='addFileBtn' variant='outlined' color='primary'>
            <span style={{ display: 'flex', justifyContent: 'space-between' }}>
              <AddIcon color='primary' fontSize='small' />
              <span>Add File</span>
            </span>
          </Button>
        </div>
        <AccountMenu />
      </div>
    </div>
  )
}

export default NavBar
