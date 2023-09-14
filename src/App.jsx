import AddProduct from './AddProduct'
import ViewProject from './ViewProject'

import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Account from "./Account";
import ChangePassword from "./components/ChangePassword";
import BusinessInfo from "./components/BusinessInfo";
import UpgradePlan from "./components/UpgradePlan";
import Documents from "./components/Documents";
import AddStore from './AddStore';
import StoreInfo from './StoreInfo';
import PersonalInfo from './components/PersonalInfo';
import Slidebar from './Slidebar';
import ProductGroup from './ProductGroup';


const App = () => {
  return (
    <>

      <BrowserRouter>
        
        <Routes>
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/viewproduct" element={<ViewProject />} />
          {/* <Route path="/account" element={<Account />} /> */}
          <Route path='/addstore' element={<AddStore />} />
          <Route path='storeinfo' element={<StoreInfo />} />
          <Route path='/progrp' element={<ProductGroup/>}/>
        </Routes>
        <Slidebar>
          <Routes>
            <Route path='/personalinfo' element={<PersonalInfo />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="/business" element={<BusinessInfo />} />
            <Route path="/document" element={<Documents />} />
            <Route path="/upgradeplan" element={<UpgradePlan />} />

          </Routes>
        </Slidebar>
      </BrowserRouter>



    </>

  )
}

export default App;