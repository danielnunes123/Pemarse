import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis';


export default function Produtos() {
    const [data,setData]= useState([])
    useEffect(()=>{
      fetch('http://localhost:3000/static/produtos.json')
      .then((response)=>response.json()).then(setData)
    },[])
    return (
      <div>
        <h1 className='ppl'>Mais para você</h1>
        <div className='produtospan'>
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
        </div>
        </div>
      )
}
