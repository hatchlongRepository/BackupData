import React from 'react'
import './slide.css'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';
import Button from '@mui/material/Button';


const Slidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItem = [
        {
            path: "/personalinfo",
            name: "Personal Information",
        },
        {
            path: "/changepassword",
            name: "Change Password",
        },
        {
            path: "/business",
            name: "Business",
        },
        {
            path: "/document",
            name: "Documents",
        },
        {
            path: "/upgradeplan",
            name: "Upgrade Plan",
        }
    ]


    return (
        <>
         <h1 style={{ margin: '20px', fontSize: '25px',color:'grey',marginLeft:'40px' }}>ACCOUNT & SETTINGS <span style={{ marginLeft: '60%' }}><Link to='/personalinfo'><Button>Profile</Button></Link><Button>Setting</Button></span></h1>
            <hr />
            <div className="container">
                <div style={{ width: "250px" }} className="sidebar">
                    <div className="top_section">
                        
                    </div>
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>

                                <div className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
                <main>{children}</main>
            </div>
            
        </>
    )
}

export default Slidebar