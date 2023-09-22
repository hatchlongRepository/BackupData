import Button from '@mui/material/Button';

import React from 'react'
import CustomNav from './CustomNav';

const PersonalInfo = () => {
    return (
        <>
        <CustomNav/>
            <div style={{marginLeft:'350px',marginTop:'-300px'}} >
                <h4 style={{ textAlign: 'left', marginTop: '5px', color: "grey" }}>Personal Information</h4>
                <div class='row'>
                    <div class='col-sm-6'>
                        <label style={{ fontSize: '16px', color: 'grey' }}>First Name *</label><br />
                        <input type="text" placeholder='Enter First Name' style={{ height: '40px', width: '400px', borderRadius: '5px', border: '1px solid grey' }} /><br />
                        <label style={{ fontSize: '16px', color: 'grey', marginTop: '15px' }}>Last Name *</label><br />
                        <input type="text" placeholder='Enter Last Name' style={{ height: '40px', width: '400px', borderRadius: '5px', border: '1px solid grey' }} /><br />
                        <label style={{ fontSize: '16px', color: 'grey', marginTop: '25px' }}>Phone Number *</label><br />
                        <input type="number" placeholder='Enter Phone Number' style={{ height: '40px', width: '400px', borderRadius: '5px', border: '1px solid grey' }} />
                        <h4 style={{ textAlign: 'left', marginTop: '35px', color: "grey" }}>Address Info</h4><br />
                        <label style={{ fontSize: '16px', color: 'grey', marginTop: '2px' }}>P.O. Box *</label><br />
                        <input type="text" placeholder='P.O. Box' style={{ height: '40px', width: '400px', borderRadius: '5px', border: '1px solid grey' }} /><br />
                        <label style={{ fontSize: '16px', color: 'grey', marginTop: '10px' }}>Province</label><br />
                        <select style={{ height: '40px', color: 'grey', width: '400px', borderRadius: '5px', border: '1px solid grey' }}>
                            <option>Select Province</option>
                        </select><br />
                        <label style={{ fontSize: '16px', color: 'grey', marginTop: '5px' }}>District</label><br />
                        <select style={{ height: '40px', color: 'grey', width: '400px', borderRadius: '5px', border: '1px solid grey' }}>
                            <option>Select District</option>
                        </select><br />
                        <label style={{ fontSize: '16px', color: 'grey', marginTop: '5px' }}>Address 1 *</label><br />
                        <input type="text" placeholder='Enter Address 1' style={{ height: '40px', width: '400px', borderRadius: '5px', border: '1px solid grey' }} /><br />
                        <label style={{ fontSize: '16px', color: 'grey', marginTop: '5px' }}>Login Attempts</label><br />
                        <input type="number" placeholder='' style={{ height: '40px', width: '50px', border: '1px solid grey', marginTop: '20px' }} /><button style={{ background: '#00ACFF', height: '40px', border: 'none', color: 'white' }}>Reset</button><br />
                        <Button variant='contained' style={{ marginTop: '20px', background: '#00ACFF', height: '42px' }}>Submit</Button>
                    </div>
                    <div class='col-sm-6'>
                        <label style={{ fontSize: '16px', color: 'grey' }}>Middle Name </label><br />
                        <input type="text" placeholder='Enter Middle Name' style={{ height: '40px', width: '400px', borderRadius: '5px', border: '1px solid grey' }} /><br />
                        <label style={{ fontSize: '16px', color: 'grey', marginTop: '15px' }}>Birth Date *</label><br />
                        <input type="date" placeholder='dd/mm/yyyy' style={{ height: '40px', width: '400px', borderRadius: '5px', border: '1px solid grey' }} /><br />
                        <label style={{ fontSize: '16px', color: 'grey', marginTop: '25px' }}>Email *</label><br />
                        <input type="email" placeholder='Enter Your Email' style={{ height: '40px', width: '400px', borderRadius: '5px', border: '1px solid grey' }} /><br />
                        <label style={{ fontSize: '16px', color: 'grey', marginTop: '172px' }}>City</label><br />
                        <select style={{ height: '40px', color: 'grey', width: '400px', borderRadius: '5px', border: '1px solid grey' }}>
                            <option>Select City</option>
                        </select><br />
                        <label style={{ fontSize: '16px', color: 'grey', marginTop: '74px' }}>Address 2</label><br />
                        <input type="text" placeholder='Enter Address 2' style={{ height: '40px', width: '400px', borderRadius: '5px', border: '1px solid grey' }} /><br />
                    </div>
                </div>

            </div>
        </>
    )
}

export default PersonalInfo