
import { useRef, useState } from 'react';
import { Categorias } from '../layout/Categorias'
import { ArrowLeft, ArrowRight } from 'lucide-react';
import logocolor from '../images/permase__1_-removebg-preview.png'
import { Link } from 'react-router-dom';
import Modalpruduto from '../layout/Modalpruduto';
import Produtos from './Produtos';

export default function Home() {
  const Categories = useRef(null);
  const [openModal, setOpenModal] = useState(false)

  const handleLeftClick = (e) =>{
    e.preventDefault();
    Categories.current.scrollLeft += Categories.current.offsetWidth;
    }
    
    const handleRightClick = (e) =>{
    e.preventDefault();
    Categories.current.scrollLeft -= Categories.current.offsetWidth;
    }
    
  return (
    <div id='home'>
      <div id='ffh'>
        <div id='inf'>
            <h1 id='vb'>
                Ola seja muito bem vindo no pemarse!
            </h1>
           <h1 id='qp'>explorar</h1>
        </div>
        <div id='img'>
            <img width='100%' height='100%' src='https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/04/21/pc-gamer-thumb-ts56rack6f6u.jpg'/>
        </div>
      </div>
      <div id='em'>
        <div id='fg'>
      <button onClick={handleLeftClick}><ArrowLeft /></button>
      <ul className='Categories' ref={Categories} id='Categories'>
         {Categorias.map((val, key)=>{
          return(
            <li key={key}>{val.nome}</li>
          /* <NavLink activeClassName="active"  className='row' key={key} to={val.link}><div id='icon'> {val.icon}</div> <li id='title'> {val.title}</li></NavLink> */
          )
         })}
         </ul>
         <button onClick={handleRightClick}><ArrowRight /></button>
         </div>   
         <br/>
         <Produtos/>
      </div>
      <footer id='footer'>
        <div id='yu'>
          <div>
        <img width='150px' id='frt' src={logocolor}/>
        </div>
        <div id='footerinf'>
          <ul>
            <li><h2>SOBRE NOS</h2></li>
          <Link to='/condicoes' id='fooli'><li>Termos e condições</li></Link>
         <Link to='/privacidade' id='fooli'><li>Polica de Privacidade</li></Link>
          </ul>
          <ul>
            <li><h2>CONTACTO</h2></li>
          <li>danielalfredo@gmail.com</li>
          <li>+244 945 430 655</li>
          </ul>
          <ul>
            <li><h2>PLATAFORMA</h2></li>
           <Link to='/registro' id='fooli'><li>Faca parte</li></Link>
          <Link to='/entrar' id='fooli'> <li>Minha conta</li></Link> 
          </ul>
        </div>
        </div>
        <div id='io'  onClick={()=> setOpenModal(true)}>© 2024 Pemarse. Todos direitos reservados.</div>
        <button onClick={()=> setOpenModal(true)}>gfh</button>
      </footer>
      <Modalpruduto  isOpen={openModal} isClose={()=> setOpenModal(false)}/>
    </div>
  )
}
