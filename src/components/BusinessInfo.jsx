import React from 'react'
import Button from '@mui/material/Button';
const BusinessInfo = () => {
    return (
        <>
            <div style={{ marginLeft: '30px' }}>
                <h4 style={{ textAlign: 'left', marginTop: '5px', color: 'grey' }}>Business Information </h4>
                <div class='row'>
                    <div class='col-sm-6'>
                        <label style={{ fontSize: '16px', color: 'grey' }}> Add-On User</label><br />
                        <input type="number" style={{ height: '40px', width: '400px', borderRadius: '5px', border: '1px solid grey', marginTop: '10px' }} /><br />
                        <label style={{ fontSize: '16px', color: 'grey', marginTop: '10px' }}>Company Name</label><br />
                        <input type="text" placeholder='Enter Your Company Name' style={{ height: '40px', width: '400px', borderRadius: '5px', border: '1px solid grey', marginTop: '10px' }} /><br />
                        <label style={{ fontSize: '16px', color: 'grey', marginTop: '10px' }}>Business Type</label><br />
                        <select style={{ height: '40px', color: 'grey', width: '400px', borderRadius: '5px', border: '1px solid grey', marginTop: '10px' }}>
                            <option value="Other Business Activity">Select Business</option>
                        </select><br />
                        <label style={{ fontSize: '16px', color: 'grey', marginTop: '10px' }}>Annual Revenue</label><br />
                        <select style={{ height: '40px', color: 'grey', width: '400px', borderRadius: '5px', border: '1px solid grey', marginTop: '10px' }}>
                            <option value="0-100,000">0-100,000</option>
                        </select><br />
                        <Button variant='outlined' style={{ background: '#00ACFF', color: 'white', marginTop: '15px' }}>Save</Button>
                    </div>
                    <div class="col-sm-6">
                        <label style={{ fontSize: '16px', color: 'grey', marginTop: '-5px' }}> Transaction Status</label><br />
                        <select style={{ height: '40px', color: 'grey', width: '400px', borderRadius: '5px', border: '1px solid grey', marginTop: '10px' }}>
                            <option value="Transaction Status">Select Status</option>
                        </select><br />
                        <label style={{ fontSize: '16px', color: 'grey', marginTop: '10px' }}> TPIN *</label><br />
                        <input type="text" placeholder='Enter TPIN' style={{ height: '40px', width: '400px', borderRadius: '5px', border: '1px solid grey', marginTop: '10px' }} /><br />
                        <label style={{ fontSize: '16px', color: 'grey', marginTop: '10px' }}> Industry</label><br />
                        <select style={{ height: '40px', width: '400px', borderRadius: '5px', border: '1px solid grey', marginTop: '9px', color: 'grey' }}>
                            <option value="Clothing/Shoe Repair /Alteration">Select Industry</option>
                        </select><br />

                    </div>
                </div>

            </div>
        </>
    )
}

export default BusinessInfo