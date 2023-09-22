import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { useParams} from 'react-router-dom';

const EditData = () => {
    
//let navigate=useNavigate();

let[st_name,setName]=useState();
let [st_man_name,setMname]=useState();
let [st_contact,setContact]=useState();
let [st_store,setStore]=useState();
let [st_email,setEmail]=useState();
let [st_po_box,setBox]=useState();
let [st_province,setProvince]=useState();
let [st_district,setDistrict]=useState();
let [st_add1,setAddress]=useState();
let [st_city,setCity]=useState();
let [st_landmark,setLandmark]=useState();
let [st_add2,setAdd]=useState();


let params=useParams();

let getStore = async () => {
    let result = await fetch(`http://127.0.0.1:4500/storedata/${params.id}`);
    result = await result.json();
    setName(result.st_name); setMname(result.st_man_name); setContact(result.st_contact); setStore(result.st_store); setEmail(result.st_email);
    setBox(result.st_po_box); setProvince(result.st_province); setDistrict(result.st_district); setAddress(result.st_add1);
    setCity(result.st_city);setLandmark(result.st_landmark);setAdd(result.st_add2);
}
useEffect(() => {
    getStore();
}, []);

let updatestore=async()=>{
    let result=await fetch(`http://localhost:4500/updatestore/${params.id}`,{
        method:'put',
        body:JSON.stringify({ st_name ,st_man_name ,st_contact , st_store , st_email , st_po_box , st_province , st_district , st_add1 , st_add2 , st_city , st_landmark}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    result=await result.json();
    if(result.Success){
        alert("Data Updated Successfully");
    }
    if(result.Status){
        alert("Failed");

    }
     
}

  return (
    <>
            <h3 style={{ margin: '20px' }}>STORE/<span style={{ fontSize: '17px', color: 'grey' }}>UPDATE STORE</span></h3>
            <hr />
            <div style={{ marginLeft: '20px' }}>
                <form >
                    <h4 style={{ textAlign: 'left', marginTop: '5px', color: "grey" }}>Store Information</h4>
                    <div class='row' >
                        <div class='col-sm-6'>
                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '5px' }}>Store Name *</label><br />
                            <input type="text" required placeholder='Enter Store Name' value={st_name} onChange={(e) => setName(e.target.value)} style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} /><br />

                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '15px' }}>Store Manager Name *</label><br />
                            <input type="text" required placeholder='Enter Manager Name' value={st_man_name} onChange={(e) => setMname(e.target.value)} style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} /><br />

                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '25px' }}>Phone Number *</label><br />
                            <input type="number" required placeholder='Enter Phone Number' value={st_contact} onChange={(e) => setContact(e.target.value)} style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} />

                            <h4 style={{ textAlign: 'left', marginTop: '35px', color: "grey" }}>Address Info</h4><br />

                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '2px' }}>P.O. Box *</label><br />
                            <input type="text" required placeholder='P.O. Box' value={st_po_box} onChange={(e) => setBox(e.target.value)} style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} /><br />

                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '10px' }}>Province</label><br />
                            <select value={st_province}  onChange={(e) => setProvince(e.target.value)} style={{ height: '40px', color: 'grey', width: '450px', borderRadius: '5px', border: '1px solid grey' }}>
                                <option>Select Province</option>
                                <option value="UP">UP</option>
                            </select><br />

                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '5px' }}>District</label><br />
                            <select value={st_district}  onChange={(e) => setDistrict(e.target.value)} style={{ height: '40px', color: 'grey', width: '450px', borderRadius: '5px', border: '1px solid grey' }}>
                                <option>Select District</option>
                                <option value="Lucknow">Lucknow</option>
                            </select><br />

                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '5px' }}>Address 1 *</label><br />
                            <input type="text" required placeholder='Enter Address 1' value={st_add1} onChange={(e) => setAddress(e.target.value)} style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} /><br />

                            <Button variant='contained' onClick={updatestore} style={{ marginTop: '20px', background: '#00ACFF', height: '42px' }}>Update</Button>
                        </div>
                        <div class='col-sm-6'>
                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '3px' }}>Store Type </label><br />
                            
                            <select value={st_store} onChange={(e) => setStore(e.target.value)} style={{ height: '40px', color: 'grey', width: '450px', borderRadius: '5px', border: '1px solid grey' }}>
                                <option>Select Type</option>
                                <option value="Store">Store</option>
                                <option value="Warehouse">Warehouse</option>
                            </select><br />
                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '15px' }}>Email *</label><br />
                            <input type="email" required placeholder='Enter Your Email' value={st_email} onChange={(e) => setEmail(e.target.value)} style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} /><br />

                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '185px' }}>City</label><br />
                            <select value={st_city}  onChange={(e) => setCity(e.target.value)} style={{ height: '40px', color: 'grey', width: '450px', borderRadius: '5px', border: '1px solid grey' }}>
                                <option>Select City</option>
                                <option value="Lucknow">Lucknow</option>
                            </select><br />

                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '10px' }}>Landmark </label><br />
                            <input type="text" placeholder='Enter Your Landmark ' value={st_landmark} onChange={(e) => setLandmark(e.target.value)} style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} /><br />

                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '74px' }}>Address 2</label><br />
                            <input type="text" placeholder='Enter Address 2' value={st_add2} onChange={(e) => setAdd(e.target.value)} style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} /><br />
                        </div>
                    </div>

                </form>
            </div>
        </>
    
  )
}

export default EditData