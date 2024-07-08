import React from 'react'
import logo from '../images/permase__2_-removebg-preview.png'
import { Search,ShoppingCart,House,User } from "lucide-react";
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div id='Navbar'>
      <div id='dt'>
        <Link to='/'>
      <img width='150px' src={logo}/></Link>
      <div id='ggrr'>
      <Search width='20px' height='20px' color='gray'/>
        <input placeholder='Pesquesar'/>
      </div>
      </div>
      <div id='qq'>
        <ul>
          <li>
          <House width='20px'/> inicio
          </li>
          <li>
            <ShoppingCart width='20px'/> carrinho
            </li>
            <Link to='/entrar' id='hh'>  
             <li id='er'>
          <User width='20px'/>  começar
          </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}
