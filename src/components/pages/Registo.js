import { Link } from 'react-router-dom'
import React from 'react'

export default function Registo() {
  return (
    <div id='registro'>
      <div id='modalregistro'>
        <h1 id='lo'>Crie sua conta agora</h1>
        <br/>
        <form id='ggt'>
            <div id='fp'>
            <label for='nome'  id='userlabel'>Nome completo</label>
            <input type='email' name='nome' id='inp' placeholder='ex: Castle Nunes'/>
            </div>
            <div id='fp'>
            <label  for='email' id='userlabel'>Endereço de email</label>
            <input type='email' name='email' id='inp' placeholder='ex: daniel@exemplo.com'/>
            </div>
            <div id='fp'>
            <label  for='telefone' id='userlabel'>Telefone</label>
            <input type='number' name='telefone' id='inp' placeholder='Escreva seu Telefone'/>
            </div>
            <div id='fp'>
            <label  for='pass' id='userlabel'>Senha</label>
            <input type='password' name='pass' id='inp' placeholder='Sua senha'/>
            </div>
            <span id='pezyd'>
                <div id='ttff'>
                <input name='yy' type='checkbox' />
                <label for='yy'>Eu aceito os</label>
                </div>
                <Link id='mk'>Termos e condições</Link>
                </span>
                <div id='kpo'>
                <button id='btnentr'>Criar conta</button>
                </div>
                <span id='criaoc'>Já tem uma conta?<Link to='/entrar' id='tf'>Entre aqui</Link></span>
        </form>
      </div>
    </div>
  )
}
