import AddIcon from '@mui/icons-material/Add'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import SearchBox from '../SearchBox/SearchBox'
import './NavBar.css'
import AccountMenu from './ProfileIcon/ProfileIcon'

const NavBar = () => {
  const navigate = useNavigate()
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
          <Button
            className='addFileBtn'
            variant='outlined'
            color='primary'
            onClick={() => {
              Swal.fire({
                title: 'Create new file',
                html: `
                
                <div >
              <span style="font-weight:bold;">File Subject: </span>
              <input type="text" id="subject" class="swal2-input" placeholder="Subject">
              <br/>
              <br/>
              <span style="font-weight:bold;">Created By: </span>
              Created By
              <br/>
              <span style="font-weight:bold;">Currently With: </span>
              Assigned By
              <br/>
              </div> 
                
                
              <input type="password" id="password" class="swal2-input" placeholder="Password">`,

                focusConfirm: false,
                allowOutsideClick: false,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'CREATE FILE',
                cancelButtonText: 'CANCEL',
                preConfirm: () => {
                  const subject =
                    Swal.getPopup()?.querySelector<HTMLInputElement>(
                      '#subject'
                    )?.value
                  const password =
                    Swal.getPopup()?.querySelector<HTMLInputElement>(
                      '#password'
                    )?.value
                  if (!subject || !password) {
                    Swal.showValidationMessage(`Please enter all details`)
                  }
                  return { subject: subject, password: password }
                },
              }).then((result) => {
                if (result.value?.subject !== undefined) {
                  Swal.fire(
                    `
                File created. Please assign this file from "Files with me".
              `.trim()
                  ).then(() => {
                    navigate('/received-files')
                  })
                }
              })
            }}
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
