import '../App.css';
import React, {useState} from "react";

const Cart =(props)=>{
    let bill;
    let complete;
    if(props.amount==0){
    bill = <h2>No items</h2>
    complete=null;}
    else {
     complete = <button className='complete'>Place Order</button>
     bill=Object.entries(props.order).map(([key,value]) =>{
     return value[1]>0 ?
     <ul key={key} className='li'>
        <li>{key +" x" + value[1]} </li>
        <li>{'$' +parseInt(value[0]*value[1])}</li>
     </ul>
        :null;
     })   
    }
    function reset(){
        props.setTotal(0)
        props.setAmount(0)
        props.setOrder({
            // name: [price,amount]
           'Chirashi Sushi':['12.00',0],
           'Futomaki':['10.00',0],
           'Ikura':['6.00',0],
           'Inari Sushi':['6.00',0],
           'Mackerel Sushi':['6.00',0],
           'Salmon Roll':['8.00',0],
           'Toro Nigiri':['9.00',0],
           'Unagi Nigiri':['5.00',0],
           'Nigiri Set':['14.00',0],
           'Gari':['1.00',0],
           'Wasabi':['1.00',0] 
          })
    }
    return (
        <div className='cart'>
          <h1>Your Order</h1>
          <div className='bill'>
              {bill}
          <hr />
          <ul className='li'>
             <li>Total:</li>
             <li>{'$' + props.total}</li>
          </ul>
          <div className='complete-div' onClick={reset}>{complete}</div>
          <p className='info'>*place order resets your order</p>
          </div>
          
        </div>
    )
}

export default Cart;