import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';
import { Plus, Minus  } from 'lucide-react';

const InfoPage = () => {
  const [numero, setNumero]=useState(1);
  const isButtonDisabled = numero === 1;
  const { id } = useParams();

  const data = {
    1: { title: 'PC GAMER ULTIMA GERAÇÃO', preco: '10 000,00', content: 'Conteúdo 1', data: '25 dezembro 2023', publicado: 'Daniel Nunes', marca: 'Apple', modelo: 'Online', devolucao: 'sim', provincias: 'sim', localizacao: 'Talatona - LUANDA'},
    2: { title: 'Título 2', content: 'Conteúdo 2' },
    3: { title: 'Título 3', content: 'Conteúdo 3' },
    4: { title: 'Título 3', content: 'Conteúdo 3' },

  };

  const info = data[id] || { title: 'Não encontrado', content: 'Nenhuma informação disponível.' };

  return (
    <div className='mnp'>
      <div className='nmp'>
        <div id='lpo'>
          <div id='bn'>
          <img width='20px' src='https://is.gd/DJB5ct'/>
          </div>
          <ul className='inflist'>
            <li><h2> <LinesEllipsis text={info.title} maxLine={2} ellipsis="..."/></h2></li>
            <li>Marca:<span>{info.marca}</span></li>
            <li>Modelo:<span>{info.modelo}</span></li>
            <li>Elegível para devolução:<span>{info.devolucao}</span></li>
            <li>Entrega em todas as províncias:<span>{info.provincias}</span></li>
            <li>Localização:<span>{info.localizacao}</span></li>
            <li>Publicado:<span className='vendname'>{info.publicado}</span>em<span>{info.data}</span></li>

          </ul>
        </div>
      </div>
      <div className='nmpe'>
        <div>
    <h2 className='precotel'>{info.preco}Kz</h2>
          <ul id='mml'>
            <li id='bnt'><button onClick={()=> setNumero(numero +1)}><Plus/></button><span id='numbespan'>{numero}</span><button disabled={isButtonDisabled} id='numberdim' onClick={()=> setNumero(numero -1)}><Minus/></button></li>
          </ul>
          <h3 className='iup'>{info.title}</h3>
        </div>
      </div>
    {/*  <h1>{info.title}</h1>
      <p>{info.content}</p> */}
    </div>
  );
};

export default InfoPage;