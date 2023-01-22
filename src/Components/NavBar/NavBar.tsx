import AddIcon from '@mui/icons-material/Add'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateFileSwal } from '../FileSwals/CreateFileSwal'
import SearchBox from '../SearchBox/SearchBox'
import { UrltoTabName } from './constants'
import './NavBar.css'
import AccountMenu from './ProfileIcon/ProfileIcon'

const NavBar = () => {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')
  return (
    <div className='navBar'>
      <div className='navBarTitle'>{UrltoTabName[window.location.pathname]}</div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          placeholder='Search File'
          style={{ width: 'unset' }}
        />
        <div>
          <Button
            className='addFileBtn'
            variant='outlined'
            color='primary'
            onClick={() => CreateFileSwal(navigate)}
          >
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
