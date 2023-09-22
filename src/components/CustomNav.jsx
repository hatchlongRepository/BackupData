import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';
import Button from '@mui/material/Button';


const CustomNav = () => {
    return (
        <div>
            <h1 style={{ margin: '20px', fontSize: '25px', color: 'grey', marginLeft: '40px' }}>ACCOUNT & SETTINGS <span style={{ marginLeft: '60%' }}><Button>Profile</Button><Button>Setting</Button></span></h1>
            <hr />
            <div className='header'>
                <ul className='design'>
                    <li className='list'><Link to='/personalinfo'> Personal Information </Link></li>
                    <li><Link to='/changepassword'>Change Password</Link></li>
                    <li><Link to='/document'>Documnets</Link></li>
                    <li><Link to='/business'> Business Information</Link></li>
                    <li><Link to='/upgradeplan'>Upgrade Plan</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default CustomNav