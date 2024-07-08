import { Link } from 'react-router-dom'
import React from 'react'

export default function Entrar() {
  return (
    <div id='entrar'>
      <div id='modalentrar'>
        <h1 id='lo'>Bem-vindo(a) a PEMARSE</h1>
        <br/>
        <form id='ggt'>
            <div id='fp'>
            <label for='user'  id='userlabel'>Usuário </label>
            <input type='email' name='user' id='inp' placeholder='Escreva Email ou Telefone'/>
            </div>
            <div id='fp'>
            <label  for='pass' id='userlabel'>Senha </label>
            <input type='password' name='pass' id='inp' placeholder='A sua Senha'/>
            </div>
            <span id='pezy'>
                <div id='ttff'>
                <input name='yy' type='checkbox' />
                <label for='yy'>Lembre de mim</label>
                </div>
                <Link to='/recuperacao' id='mk'>Esqueceu-se da senha?</Link>
                </span>
                <div id='kpo'>
                <button id='btnentr'>Entrar</button>
                </div>
                <span id='criaoc'>Não tem uma conta?<Link to='/registro' id='tf'>Criar conta</Link></span>
        </form>
      </div>
    </div>
  )
}
