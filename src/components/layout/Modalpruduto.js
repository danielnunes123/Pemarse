import React from 'react'
import midia from '../videos/Design_sem_nome_2024_07_03T151414_164_V1.mp4'
import { SendHorizontal } from 'lucide-react';

export default function Modalpruduto() {
function send(){
    const inp = document.getElementById("textvalue").value
    const span = document.getElementById("fgm")

    span.innerHTML+=` <div id="containern">
        <div id="circle"></div>
        <div id="message-box">
            <div id="header">
                <h1 id="name">Daniel</h1>
                <h2 id="time">12:05</h2>
            </div>
            <p id="message">${inp}</p>
        </div>
    </div>`
}

  return (
    <div id='modalpro'>
      <div className='submodal' id='modalpro1'>ghh
      </div>
      <div className='submodaln'>
        <video id='nn' controls  autoPlay src={midia} type='video/mp4'/>
      </div>
      <div className='submodal' id='modalpro2'>
        <div className='ypm'>
            <h2>Comentários</h2>
            <div id='fgm'></div>
            <div id='fgn'>
                <div id='envinp'>
                    <textarea id='textvalue' maxLength='30' placeholder='Escreva uma menssagen'></textarea>
                    <button onClick={send}>
                        <SendHorizontal  color='#0f4eff'/>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
