import React from 'react'
import Button from '@mui/material/Button';
import CustomNav from './CustomNav';

const Documents = () => {
    return (
        <>
            <CustomNav/>
            <div style={{marginLeft:'350px',marginTop:'-300px'}}>
            <div style={{marginLeft:'30px'}}>
                <h4 style={{ textAlign: 'left', marginTop: '5px', color: 'grey' }}>Documents</h4>
                <h5 style={{ fontWeight: '100' }}>Uploaded Documents:</h5>
            </div>
            <div class='row' style={{ marginLeft: '20px' }}>
                <div class="col-sm-6">
                    <label style={{ fontSize: '16px', color: 'grey' }}>Identity Document</label><br />
                    <input type="text" placeholder='Select type of proof...' style={{ height: '40px', width: '400px', borderRadius: '5px', border: '1px solid grey' }} /><br />
                    <Button variant='outlined' style={{ background: '#00ACFF', color: 'white', marginTop: '10px' }}><i class="fa-solid fa-folder-open"></i>Browse</Button>
                    <Button variant='outlined' style={{ background: '#00ACFF', color: 'white', marginTop: '10px', marginLeft: '5px' }}><i class="fa-solid fa-upload"></i>Upload</Button> <br />
                    <label style={{ fontSize: '16px', color: 'grey' }}>Company Document</label><br />
                    <input type="text" placeholder='Select type of proof...' style={{ height: '40px', width: '400px', borderRadius: '5px', border: '1px solid grey' }} /><br />
                    <Button variant='outlined' style={{ background: '#00ACFF', color: 'white', marginTop: '10px' }}><i class="fa-solid fa-folder-open"></i>Browse</Button>
                    <Button variant='outlined' style={{ background: '#00ACFF', color: 'white', marginTop: '10px', marginLeft: '5px' }}><i class="fa-solid fa-upload"></i>Upload</Button> <br />

                    <label style={{ fontSize: '16px', color: 'grey' }}>Other</label><br />
                    <input type="text" placeholder='Select type of proof...' style={{ height: '40px', width: '400px', borderRadius: '5px', border: '1px solid grey' }} /><br />
                    <Button variant='outlined' style={{ background: '#00ACFF', color: 'white', marginTop: '10px' }}><i class="fa-solid fa-folder-open"></i>Browse</Button>
                    <Button variant='outlined' style={{ background: '#00ACFF', color: 'white', marginTop: '10px', marginLeft: '5px' }}><i class="fa-solid fa-upload"></i>Upload</Button> <br />

                </div>
                <div class="col-sm-6">
                    <label style={{ fontSize: '16px', color: 'grey' }}>Bank Document</label><br />
                    <input type="text" placeholder='Select type of proof...' style={{ height: '40px', width: '400px', borderRadius: '5px', border: '1px solid grey' }} /><br />
                    <Button variant='outlined' style={{ background: '#00ACFF', color: 'white', marginTop: '10px' }}><i class="fa-solid fa-folder-open"></i>Browse</Button>
                    <Button variant='outlined' style={{ background: '#00ACFF', color: 'white', marginTop: '10px', marginLeft: '5px' }}><i class="fa-solid fa-upload"></i>Upload</Button> <br />

                    <label style={{ fontSize: '16px', color: 'grey' }}>Address Document</label><br />
                    <input type="text" placeholder='Select type of proof...' style={{ height: '40px', width: '400px', borderRadius: '5px', border: '1px solid grey' }} /><br />
                    <Button variant='outlined' style={{ background: '#00ACFF', color: 'white', marginTop: '10px' }}><i class="fa-solid fa-folder-open"></i>Browse</Button>
                    <Button variant='outlined' style={{ background: '#00ACFF', color: 'white', marginTop: '10px', marginLeft: '5px' }}><i class="fa-solid fa-upload"></i>Upload</Button> <br />

                </div>
            </div>
            </div>
        </>
    )
}

export default Documents