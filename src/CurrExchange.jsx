import React, { useState } from 'react'


const CurrExchange = () => {
    const curr1 = ['INR', 'USD', 'ZMW', 'ZAR'];

    const curr2 = {
        'INR': ['USD', 'ZMW', 'ZAR'],
        'USD': ['INR', 'ZMW', 'ZAR'],
        'ZMW': ['INR', 'USD', 'ZAR'],
        'ZAR': ['INR', 'USD', 'ZMW']
    }

    const [curr, setCurr] = useState('');
    console.log(curr);

    const add= () => {
        var new_check = document.getElementById("new_check").value;
        var new_rate = document.getElementById("new_rate").value;
        var new_mid = document.getElementById("new_mid").value;
        var new_buy = document.getElementById("new_buy").value;
        var new_sell = document.getElementById("new_sell").value;
        var new_buyrate = document.getElementById("new_buyrate").value;
        var new_salerate = document.getElementById("new_salerate").value;
        var new_date = document.getElementById("new_date").value;
        var new_seq = document.getElementById("new_seq").value;

        var table = document.getElementById("data_table");
        var table_len = (table.rows.length) - 1;

        var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='check_row" + table_len + "'>" + new_check + "</td><td id='rate_row" + table_len + "'>" + new_rate + "</td><td id='mid_row" + table_len + "'>" + new_mid + "</td><td id='buy_row" + table_len + "'>" + new_buy + "</td><td id='sell_row" + table_len + "'>" + new_sell + "</td><td id='buyrate_row" + table_len + "'>" + new_buyrate + "</td><td id='salerate_row" + table_len + "'>" + new_salerate + "</td><td id='date_row" + table_len + "'>" + new_date + "</td><td id='seq_row" + table_len + "'>" + new_seq + "</td></tr>";
        document.getElementById("new_check").value="";
        document.getElementById("new_rate").value="";
        document.getElementById("new_mid").value="";
        document.getElementById("new_buy").value="";
        document.getElementById("new_sell").value="";
        document.getElementById("new_buyrate").value="";
        document.getElementById("new_salerate").value="";
        document.getElementById("new_date").value="";
        document.getElementById("new_seq").value="";

    }
    const del= () =>{
        var tab=document.getElementById("data_table");
        var count=tab.rows.length;
        console.log("Row Count : "+count);
        for(var i=1;i<count;i++){
            var c=tab.rows[i].cells[0].childNodes;
            console.log(c);
            if(c.checked === 1){
                console.log("i :"+i);
                tab.del(i)
            }
        }        
    }

    return (
        <div>
            <h3 style={{ margin: '20px' }}>MASTER/<span style={{ fontSize: '17px', color: 'grey' }}>CURRENCY EXCHANGE RATE</span></h3>
            <hr />
            <div>
                <h4 style={{ margin: '20px' }}>Currency Exchange Rates Input</h4>
                <label style={{ fontSize: '16px', color: 'grey', marginLeft: '55px' }}>Currency 1 <span style={{ color: 'red' }}>*</span></label>
                <select onChange={(e) => { setCurr(e.target.value) }} style={{ height: '40px', color: 'grey', width: '350px', borderRadius: '5px', border: '1px solid grey' }}>
                    <option>Select </option>
                    {
                        curr1.map(c1 => {
                            return <option>{c1}</option>
                        })
                    }
                </select>
                <label style={{ fontSize: '16px', color: 'grey', marginLeft: '55px' }}>Currency 2 <span style={{ color: 'red' }}>*</span></label>
                {curr && <select style={{ height: '40px', color: 'grey', width: '350px', borderRadius: '5px', border: '1px solid grey' }}>
                    <option>Select currency 2</option>
                    {
                        curr2[curr].map(c2 => {
                            return <option>{c2}</option>
                        })
                    }

                </select>
                }
                <h5 style={{ fontSize: '17px', marginLeft: '20px', marginTop: '20px' }}>Currency Rate</h5>
                <table style={{ width: '800px', marginLeft: '15px' }} border='1' id='data_table'>
                    <tr style={{ background: '#c5e3ec' }}>
                        <th><i class="fa-solid fa-backward-step"></i></th>
                        <th><i class="fa-solid fa-caret-left"></i> 1 of 1 <i class="fa-solid fa-caret-right"></i></th>
                        <th><i class="fa-solid fa-forward-step"></i></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th><input type="button" value="+" class='add' onClick={add} style={{ width: '30px' }} /> <input type="button" class='del' value="-" onClick={del} style={{ width: '30px' }} /></th>
                    </tr>
                    <tr style={{ background: '#c5e3ec' }}>
                        <th style={{ border: '1px solid skyblue' }}><input type="checkbox" name="" id="aaa" /></th>
                        <th style={{ border: '1px solid skyblue' }}>Rate Type *</th>
                        <th style={{ border: '1px solid skyblue' }}>Mid Rate</th>
                        <th style={{ border: '1px solid skyblue' }}>Buy Spread</th>
                        <th style={{ border: '1px solid skyblue' }}>Sell Spread</th>
                        <th style={{ border: '1px solid skyblue' }}>Buy Rate</th>
                        <th style={{ border: '1px solid skyblue' }}>Sale Rate</th>
                        <th style={{ border: '1px solid skyblue' }}>Rate Date</th>
                        <th style={{ border: '1px solid skyblue' }}>Rate Sequence</th>
                    </tr>
                    <tr id='row'>
                        <td id='check_row'><input type="checkbox" name="" id="new_check" /></td>
                        <td id='rate_row'><input type="text" name="" id="new_rate" style={{ width: '100px', border: '1px solid #fafafa', background: '#f0fff0' }} /></td>
                        <td id='mid_row'><input type="text" name="" id="new_mid" style={{ width: '100px', border: '1px solid #fafafa', background: '#f0fff0' }} /></td>
                        <td id='buy_row'><input type="text" name="" id="new_buy" style={{ width: '100px', border: '1px solid #fafafa', background: '#f0fff0' }} /></td>
                        <td id='sell_row'><input type="text" name="" id="new_sell" style={{ width: '100px', border: '1px solid #fafafa', background: '#f0fff0' }} /></td>
                        <td id='buyrate_row'><input type="text" name="" id="new_buyrate" style={{ width: '100px', border: '1px solid #fafafa', background: '#f0fff0' }} /></td>
                        <td id='salerate_row'><input type="text" name="" id="new_salerate" style={{ width: '100px', border: '1px solid #fafafa', background: '#f0fff0' }} /></td>
                        <td id='date_row'><input type="text" name="" id="new_date" style={{ width: '100px', border: '1px solid #fafafa', background: '#f0fff0' }} /></td>
                        <td id='seq_row'><input type="text" name="" id="new_seq" style={{ width: '100px', border: '1px solid #fafafa', background: '#f0fff0' }} /></td>
                    </tr>
                </table>
                <input type="button" value="Save" id='save_button1' style={{color:'white',background:'#00acff',border:'1px solid skyblue',height:'40px',width:'70px',borderRadius:'5px',margin:'10px',marginLeft:'60%'}}/>
                <input type="button" value="Cancel" id='delete_button1' style={{color:'white',background:'#00acff',border:'1px solid skyblue',height:'40px',width:'70px',borderRadius:'5px'}}/>

            </div>
        </div>
    )
}

export default CurrExchange;