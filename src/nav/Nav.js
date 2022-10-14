import '../App.css';
import React, {useState} from "react";
import c from '../images/logo.png'
import { Link } from 'react-router-dom'

const Nav =(props)=>{
    const navStyle= {
        color:'black',
        textDecoration:'none'
    }
    let number;
    console.log(props.amount)
    if (props.amount==0){
        number=null
    }
    else{
        number = <li className='num'>{props.amount}</li>
    }
    return (
        <div className='nav'>
           <img className='logo' src={c} alt='logo'></img>
           <ul className='links'>
              <Link style={navStyle} to='/'>
                 <li>Menu</li>
              </Link>
              <Link style={navStyle} to='order'>
                 <li>Your Order </li>
              </Link>
                 {number}
           </ul>
        </div>
    )
}

export default Nav;