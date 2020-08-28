import React, { useState } from 'react';
import './styles.css';
import sucessImgLogin from '../../assets/images/success-background.svg';
import logoImg from '../../assets/images/logo.svg'
import InputLogin from '../../assets/components/InputLogin';
import heathIcon from '../../assets/images/icons/purple-heart.svg'


function MakeLogin(){
    const [user , setUser] = useState('');
    const [senha , setSenha] = useState('');

    return (
        <div id="page-makeLogin">
            <div className="pageRight">
                <img src={sucessImgLogin} alt="Imagem de fundo"/>
                <div className="pageRightText">
                    <img src={logoImg} alt="Proffy"/>
                    <p className="pageRightTextDescript">Sua Plataforma de estudos online.</p>
                </div>
            </div>
            <div className="pageLeft">
                <main>
                    <form action="">
                        <fieldset>
                            <legend>Fazer Login</legend>

                                <InputLogin 
                                    name="email" 
                                    placeholder="E-mail" 
                                    value= { user }  
                                    onChange= { (e) => {setUser(e.target.value)}} 
                                />

                                <InputLogin 
                                    name="Senha" 
                                    placeholder="Senha" 
                                    value= { senha }  
                                    type='password'
                                    onChange= { (e) => {setSenha(e.target.value)}} 
                                />


                                <div className="footer">
                                    <input className="cbRemember"type="checkbox"/>
                                    <a href="#">Lembrar-me</a>
                                    <a href="#">Esqueci minha senha</a>                                    
                                </div>

                                <button type="submit">
                                    Entrar
                                </button>

                                <div className="footer-button">
                                    <p className="cadaster">Não tem conta? <strong>Cadastre-se</strong></p>
                                    <p className="free">É de graça <img src={heathIcon} alt="Heart"/> </p>
                                </div>
                        </fieldset>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default MakeLogin;