import AddProduct from './AddProduct'
import ViewProject from './ViewProject'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChangePassword from "./components/ChangePassword";
import BusinessInfo from "./components/BusinessInfo";
import UpgradePlan from "./components/UpgradePlan";
import Documents from "./components/Documents";
import AddStore from './AddStore';
import StoreInfo from './StoreInfo';
import PersonalInfo from './components/PersonalInfo';
import ProductGroup from './ProductGroup';
import ViewData from './ViewData';
import EditData from './EditData';
import DeleteStore from './DeleteStore';
import PriceMaster from './PriceMaster';
import CurrExchange from './CurrExchange';
import MenuForm from './menu/MenuForm';
import ProductCategory from './ProductCategory';
import CustomNav from './components/CustomNav';


const App = () => {
  return (
    <>

      <BrowserRouter>

        <Routes>
          <Route path='/nav' element={<CustomNav />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/viewproduct" element={<ViewProject />} />
          <Route path='/addstore' element={<AddStore />} />
          <Route path='storeinfo' element={<StoreInfo />} />
          <Route path='/progrp' element={<ProductGroup />} />
          <Route path='/viewdata/:id' element={<ViewData />} />
          <Route path='/editdata/:id' element={<EditData />} />
          <Route path='/deletedata/:id' element={<DeleteStore />} />
          <Route path='/pricemaster' element={<PriceMaster />} />
          <Route path='/currency' element={<CurrExchange />} />
          <Route path='/menu' element={<MenuForm />} />
          <Route path='/procat' element={<ProductCategory />} />
          <Route path='/personalinfo' element={<PersonalInfo />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/business" element={<BusinessInfo />} />
          <Route path="/document" element={<Documents />} />
          <Route path="/upgradeplan" element={<UpgradePlan />} />
        </Routes>

      </BrowserRouter>



    </>

  )
}

export default App;