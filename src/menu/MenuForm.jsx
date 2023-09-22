import React from 'react'
import './menu.css';
import {Link} from 'react-router-dom';

const MenuForm = () => {
    return (
        <div>
            <nav>
                <ul className='menu'>
                    <li><label for="btn" className="button">Purchase Management <span><i className='fas fa-caret-right'></i></span></label>
                        <input type="checkbox" className='check-btn' name="" id="btn" />
                        <ul>
                            <li><label for="btn-2" className='button'>Transaction <span><i className='fas fa-caret-right'></i></span></label>
                                <input type="checkbox" className='check-btn' name="" id="btn-2" />
                                <ul>
                                    <li>Purchase Order</li>
                                </ul>
                            </li>
                            <li><label for="btn-3" className='button'>Reports <span><i className='fas fa-caret-right'></i></span></label>
                                <input type="checkbox" className='check-btn' name="" id="btn-3" />
                                <ul>
                                    <li>Vendor List</li>
                                    <li>Vendor ledger</li>
                                    <li>Vendor Closing Balaance</li>
                                    <li>Purchase Order Report</li>
                                    <li>PO status Report</li>
                                </ul>
                            </li>
                            <li><label for="btn-4">Setup<span><i className='fas fa-caret-right'></i></span></label>
                                <input type="checkbox" className='check-btn' name="" id="btn-4" />
                                <ul>
                                    <li>Vendor define</li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li><label for="btn-1" className="button">Inventory Management <span><i className='fas fa-caret-right'></i></span></label>
                        <input type="checkbox" className='check-btn' name="" id="btn-1" />
                        <ul>
                            <li><label for="btn-5" className='button'>Transaction <span><i className='fas fa-caret-right'></i></span></label>
                                <input type="checkbox" className='check-btn' name="" id="btn-5" />
                                <ul>
                                    <li> Store-Material Receiving</li>
                                    <li>Store-Raw Material Issue</li>
                                    <li>Product Stock Adjustment</li>
                                    <li>Product Transaction-view</li>
                                    <li>Product Closing Stock</li>
                                    <li>Product Transaction process run</li>
                                </ul>
                            </li>
                            <li><label for="btn-6" className='button'>Reports <span><i className='fas fa-caret-right'></i></span></label>
                                <input type="checkbox" className='check-btn' name="" id="btn-6" />
                                <ul>
                                    <li>Product Stock Date Wise</li>
                                    <li>Product Closin Stock</li>
                                    <li>Product Min Stock Level</li>
                                    <li>Product Stock Over store</li>
                                </ul>
                            </li>
                            <li><label for="btn-7">Setup<span><i className='fas fa-caret-right'></i></span></label>
                                <input type="checkbox" className='check-btn' name="" id="btn-7" />
                                <ul>
                                    <Link to='/procat'><li>Product Category</li></Link>
                                    <li>Product Sub Categor</li>
                                    <Link to='/viewproduct'><li>Product Group</li></Link>
                                    <li>Product Code</li>
                                    <li>Store & Location Define</li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li><label for="btn-8" className="button">General Ledger Management <span><i className='fas fa-caret-right'></i></span></label>
                        <input type="checkbox" className='check-btn' name="" id="btn-8" />
                        <ul>
                            <li><label for="btn-9" className='button'>Transaction <span><i className='fas fa-caret-right'></i></span></label>
                                <input type="checkbox" className='check-btn' name="" id="btn-9" />
                                <ul>
                                    <li>GL Voucher Entry</li>
                                    <li>GL Voucher Upload</li>
                                    <li>Expense Entry</li>
                                    <li>Cash Transfer from Account</li>
                                    
                                </ul>
                            </li>
                            <li><label for="btn-10" className='button'>Reports <span><i className='fas fa-caret-right'></i></span></label>
                                <input type="checkbox" className='check-btn' name="" id="btn-10" />
                                <ul>
                                    <li>Product Stock Date Wise</li>
                                    <li>Product Closin Stock</li>
                                    <li>Product Min Stock Level</li>
                                    <li>Product Stock Over store</li>
                                </ul>
                            </li>
                            <li><label for="btn-11">Setup<span><i className='fas fa-caret-right'></i></span></label>
                                <input type="checkbox" className='check-btn' name="" id="btn-11" />
                                <ul>
                                    <li>Product Category</li>
                                    <li>Product Sub Categor</li>
                                    <li>Product Group</li>
                                    <li>Product Code</li>
                                    <li>Store & Location Define</li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li><a href="">Sales Management</a></li>
                    <li><a href="">Account Payable</a></li>
                    <li><a href="">Account Receivables</a></li>
                    <li><a href="">Product Management</a></li>
                    <li><a href="">HR and Payroll</a></li>
                    <li><a href="">User Administration</a></li>
                    <li><a href="">Cash Management</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default MenuForm