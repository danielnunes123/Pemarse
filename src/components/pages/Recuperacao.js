import { Link } from 'react-router-dom'
import React from 'react'

export default function Recuperacao() {
  return (
    <div id='entrar'>
      <div id='modalrecu'>
        <h1 id='lo'>Esqueceu sua senha?</h1>
        <span id='recterm'>Indique o email ou número de telefone da conta que pretende recuperar</span>
        <br/>
        <br/>
        <form id='ggt'>
            <div id='fp'>
            <label for='recuperacao'  id='userlabel'>Usuário </label>
            <input type='email' name='recuperacao' id='inp' placeholder='ex: peter@exemplo.com'/>
            </div>
                <div id='kpo'>
                <button id='btnentr'>Recuperar</button>
                </div>
        </form>
      </div>
    </div>
  )
}
