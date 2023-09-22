import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const PriceMaster = () => {
    return (
        <div>

<h3 style={{ margin: '20px' }}>PRODUCT/<span style={{ fontSize: '17px', color: 'grey' }}>PRICE MASTER</span></h3>
            <hr />

            <div class='row'>
                <div class='col-md-2'>
                    <label style={{ fontSize: '16px', marginLeft: '20px', marginTop: '20px', color: 'grey' }}> Product Name :</label><br />
                    <label style={{ fontSize: '16px', marginTop: '25px', marginLeft: '20px', color: 'grey' }}> HSN:</label><br />
                    <label style={{ fontSize: '16px', marginTop: '25px', marginLeft: '20px', color: 'grey' }}> Currency:</label><br />
                    <label style={{ fontSize: '16px', marginTop: '25px', marginLeft: '20px', color: 'grey' }}> Billing Price Per Unit:</label><br />
                    <label style={{ fontSize: '16px', marginTop: '25px', marginLeft: '20px', color: 'grey' }}> Unit Of Measure:</label><br />
                    <label style={{ fontSize: '16px', marginTop: '25px', marginLeft: '20px', color: 'grey' }}> Buying Price Per Unit :</label><br />

                    <Button variant='outlined' style={{ background: '#00ACFF', marginLeft: '20px', color: 'white', marginTop: '25px' }}>Save</Button>
                   <Link to='/addproduct'><Button variant='outlined' style={{ background: '#00ACFF', marginLeft: '40px', color: 'white', marginTop: '25px' }}>Back</Button></Link> 

                </div>
                <div class='col-md-10'>
                    <select style={{ height: '40px', color: 'grey', width: '400px', borderRadius: '5px', border: '1px solid grey', marginTop: '10px' }}>
                        <option value="">Select Product</option>
                    </select><br />
                    <select style={{ height: '40px', color: 'grey', width: '400px', borderRadius: '5px', border: '1px solid grey', marginTop: '10px' }}>
                        <option value="Other Business Activity">Select HSN</option>
                    </select><br />

                    <input type="text" placeholder='Enter your Currency' style={{ height: '40px', color: 'grey', width: '400px', borderRadius: '5px', border: '1px solid grey', marginTop: '10px' }} /><br />
                    <input type="number" placeholder='Enter your Billing Price' style={{ height: '40px', color: 'grey', width: '400px', borderRadius: '5px', border: '1px solid grey', marginTop: '10px' }} /><br />

                    <select style={{ height: '40px', color: 'grey', width: '400px', borderRadius: '5px', border: '1px solid grey', marginTop: '10px' }}>
                        <option value="">Select Unit </option>
                        <option value="">Mass</option>
                        <option value="">Length</option>
                        <option value="">Time</option>
                        <option value="">Amount of water</option>
                        <option value="">Electric current</option>

                    </select><br />
                    <input type="number" placeholder='Enter Your buying price' style={{ height: '40px', color: 'grey', width: '400px', borderRadius: '5px', border: '1px solid grey', marginTop: '10px' }} /><br />

                </div>
            </div>

        </div>
    )
}

export default PriceMaster