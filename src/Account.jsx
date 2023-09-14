import Button from '@mui/material/Button';
import React from 'react'
import { Link } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PersonalInfo from './components/PersonalInfo';




const Account = () => {
    return (
        <>
            <h1 style={{ margin: '20px', fontSize: '25px',color:'grey',marginLeft:'40px' }}>ACCOUNT & SETTINGS <span style={{ marginLeft: '60%' }}><Button>Profile</Button><Button>Setting</Button></span></h1>
            <hr />
            <div class='row'>
                <div class='col-md-3'>
                    <ul class="nav flex-column" type='none'>
                        <li class="nav-item">
                            <Link class="nav-link active" to='/personalinfo'><Button variant="text" style={{ color: 'grey', fontWeight: 'bold',marginLeft:'20px' }} >Personal Information</Button></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/changepassword' ><Button variant='text' style={{ color: 'grey', fontWeight: 'bold' ,marginLeft:'20px'}} >Change Password</Button></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/business'><Button variant='text' style={{ color: 'grey', fontWeight: 'bold',marginLeft:'20px' }}>Business Information</Button></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link " to='/document'><Button variant='text' style={{ color: 'grey', fontWeight: 'bold' ,marginLeft:'20px'}}>Documnets</Button></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link " to='/upgradeplan'><Button variant='text' style={{ color: 'grey', fontWeight: 'bold' ,marginLeft:'20px'}}>Upgrade Plan</Button></Link>
                        </li>
                    </ul>
                </div>
                <div class='col-md-9'>
                   <PersonalInfo/>

                </div>
            </div>

        </>
    )
}

export default Account