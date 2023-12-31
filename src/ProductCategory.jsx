import React from 'react'

export default function ProductCategory() {

    const inventryClass = ['Finished', 'Services', 'Raw', 'Waste']

  return (
    
        <div className="row mt-3">
            <div className="col-4 border "></div>
            

                <div className="col-8   ">
                <span style={{fontWeight:'bold'}} className='fs-3'>INVENTORY</span><span>/</span>
                <span style={{fontWeight:'bold'}} className='fs-4'>SETUP</span><span>/</span> 
        <span className='fs-5 fw-bold'>PRODUCT CATEGORY</span><span>/</span>
        <span className='fs-6 '>ADD CATEGORY</span>
        <hr />
<br />
                   <span className='mx-3   mt-3   '> Inventory Class </span>
                    <select className='w-25 mx-3'>
                        <option value=""></option>
                        {inventryClass.map((index, value)=>(
                                <option key={value} value={index} >
                                {index}
                                </option>
                        ))}
                        
                    </select>
            
                <span className='mx-3 '> Product Class </span>
                    <select className='w-25 mx-3'>
                        <option value=""></option>
                        {inventryClass.map((index, value)=>(
                                <option key={value} value={index} >
                                {index}
                                </option>
                        ))}
                        
                    </select>
                    <br />

                <div className="col-12 mt-2 border ">

                            <div className='mx-5 m-4'>
                                <span className=' '>Serial No</span> <input type='text' className='w-25 mx-3' />
                                <span className=' ' style={{marginLeft:'270px'}}>
                                Is Active <input type='checkbox' className='mt-2' style={{marginLeft:'10px'}} />
                                </span>
                                <br />
                                <span className=' ' style={{marginLeft:'34px'}}>Title </span>
                                <input type="text" className='mx-3 mt-2 w-25' />
                                <span className=' ' style={{marginLeft:'240px'}}>
                                   <label > Sale Profit % </label><input type='text' style={{width:'100px',marginLeft:'10px'}} />
                                </span>
                                <br />

                                <span className=' ' style={{marginLeft:'-15px'}}>Description </span>
                                <input type="text" className=' mt-2 w-25' style={{marginLeft:'15px'}}/>

                                <span className=' ' style={{marginLeft:'269px'}}>
                                    Discount  % <input type='text' style={{width:'100px',marginLeft:'8px'}} />
                                </span>

                            </div>
                         
                    


                </div>

            
                <div className=' mt-2 mb-2'>
                <button style={{ background: '#00ACFF', color: 'white',  height: '40px', marginTop:'15px', marginLeft:'610px',border:'5px solid #00ACFF',borderRadius:'5px' }}><i className="fa-solid fa-check"></i> Submit</button>
                <button style={{ background: '#00ACFF', color: 'white', height: '40px', margin:'10px', marginLeft:'25px' , border:'5px solid #00ACFF',borderRadius:'5px' }}><i className="fa-solid fa-circle-xmark"></i> Cancel</button>
                </div>

                </div>

        </div>
  
  )
}
