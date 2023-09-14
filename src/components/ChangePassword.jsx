import Button from '@mui/material/Button';
import React from 'react'

const ChangePassword = () => {
    return (
        <div style={{marginLeft:'20px'}}>
            <h4 style={{ textAlign: 'left', marginTop: '5px',color:'grey' }}>Change Password </h4>

            <input type="password" placeholder='Enter Current Password' style={{ height: '40px', width: '400px', borderRadius: '5px', border: '1px solid grey', marginTop: '10px' }} /><br />
            <input type="password" placeholder='Enter New Password' style={{ height: '40px', width: '400px', borderRadius: '5px', border: '1px solid grey', marginTop: '10px' }} /><br />
            <Button variant='contained' style={{marginTop:'20px',background:'#00ACFF'}}>Change Password</Button>
        </div>
    )
}

export default ChangePassword