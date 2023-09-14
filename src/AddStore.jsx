import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './view.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const AddStore = () => {
  const [sttm_store, setData] = useState([]);
  const getdata = async () => {

    let result = await fetch('http://localhost:4500/getdata');
    result = await result.json()
    console.log(result);
    setData(result);
  }
  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      <h3 style={{ margin: '20px' }}>STORE<span style={{ fontSize: '17px', color: 'lightgrey' }}>/STORE LIST</span></h3>
      <hr />
      <Box sx={{ '& button': { m: 0.3 } }}>


        <div style={{ marginTop: '30px',marginLeft:'52px' }}>
          <Link to='/storeinfo' ><Button variant="contained" style={{ background: '#00ACFF', fontSize: '12px' }} size="small"> Add Store </Button></Link>
          <Button variant="contained" style={{ background: '#00ACFF', fontSize: '12px' }} size="small"> <i class="fa-solid fa-arrow-up-from-bracket"></i> Import Store</Button>
          <Button variant="contained" style={{ background: '#00ACFF', fontSize: '12px' }} size="small"><i class="fa-solid fa-download"></i> Export Store </Button>
          <Button variant="outlined" size="small" style={{ fontSize: '12px' }}><i class="fa-solid fa-bars"></i>Sample Store Sheet</Button>
          <span style={{ fontSize: '14px', marginLeft: '2px' }}>Show</span>
          <Button variant='outlined' style={{ width: '20px', height: '30px' }}></Button>
          <Button variant='contained' size='small ' style={{ background: '#EE4B2B', height: '30px', fontSize: '12px' }}><i class="fa-solid fa-trash"></i>Delete Selected Store</Button>
          <Button variant='outlined' style={{ background: '#00ACFF', color: 'white', width: 'auto', height: '30px' }}><i class="fa-solid fa-arrows-rotate"></i></Button>
        </div>
        <div class='row' style={{ marginTop: '30px' }}>
         
          <div style={{ marginLeft: '50px' }}>
           <select style={{ width: '150px', fontSize: '14px', height: '30px', marginTop: '3px', borderRadius: '5px', marginLeft: '5px' }}>
              <option>Store</option>
            </select>
            <input type="text" name="" id="" placeholder='Search...' style={{ width: '300px', fontSize: '14px', marginTop: '0', height: '30px', borderRadius: '5px', border: '1px solid grey', margin: '4px' }} />
            <Button variant='outlined' size="small" style={{ fontSize: '12px', height: '30px', color: 'black', border: '1px solid black' }}><i class="fa-solid fa-magnifying-glass"></i> Go </Button>

            <table>
              <tr style={{ background: '#FAFAFA' }}>

                <th>Store Code</th>
                <th>Store Name</th>
                <th>Manager Name</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Actions</th>
                <th><input type="checkbox" name="" id="" />Select All</th>
              </tr>
              {
                sttm_store.length > 0 ? sttm_store.map((item, index) =>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.st_name}</td>
                    <td>{item.st_man_name}</td>
                    <td>{item.st_contact}</td>
                    <td>{item.st_add1} {item.st_add2}</td>
                    <td><i class="fa-regular fa-eye view-view"></i>  <i class="fa-solid fa-user-pen view-edit"></i>  <i class="fa-regular fa-trash-can view-delete"></i></td>
                    <td><input type="checkbox" name="" id="" /></td>
                  </tr>
                ) :
                  <h3>No data</h3>
              }
           
           
          </table>
          <div style={{ marginLeft: '50%', marginTop: '20px' }}>
            1-10<Button variant='outlined' >Next<i class="fa-solid fa-chevron-right"></i></Button>
          </div>

        </div>
      </div>
    </Box >
    </>
  );
}

export default AddStore