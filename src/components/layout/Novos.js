import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import LinesEllipsis from 'react-lines-ellipsis';



export default function Novos() {
    const Novos = useRef(null);
    const [data,setData]= useState([])

    const handleLeftClick = (e) =>{
        e.preventDefault();
        Novos.current.scrollLeft += Novos.current.offsetWidth;
        }
        
        const handleRightClick = (e) =>{
        e.preventDefault();
        Novos.current.scrollLeft -= Novos.current.offsetWidth;
        }

    useEffect(()=>{
      fetch('http://localhost:3000/static/produtos.json')
      .then((response)=>response.json()).then(setData)
    },[])
    return (
      <div>
        <span className="btnslide">
        <h1 className='ppl'>Novos Produtos</h1>
        <span className="ffg">
            <button className="btnscrol" onClick={handleLeftClick}>
                <IoIosArrowBack className="kkl"/>
        </button>
        <button className="btnscrol" onClick={handleRightClick}>
            <IoIosArrowForward  className="kkl"/>
        </button>
        </span>
        </span>
        <ul  ref={Novos} id='novos' className='novos'>
      {data.map((produtos)=>{
    const {id, name,image,url,preco} = produtos;
    return (
      <Link to={produtos.url}>
      <div id='eej' key={produtos.id}>
        <img id='pon' src={produtos.image}/>
        <div className='mm'>
        <LinesEllipsis
        className='namepro'
        text={produtos.name}
        maxLine={1}
        ellipsis="..."
      />
      <span className='precopro'>{produtos.preco}Kz</span>
      </div>
      </div>
      </Link>
    )
      })}
        </ul>
        </div>
      )
}
