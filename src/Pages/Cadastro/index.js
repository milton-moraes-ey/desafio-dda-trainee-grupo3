import React from 'react';
import { Link } from "react-router-dom";
import { Hero1, Hero2, Hero3, Container, ContainerLogin, ContainerTitle, BtnHandler, Button, Return} from './styles';
import Goku from "../../img/goku.png";
import Logo from "../../img/logo.png";
import SpiderMan from "../../img/spiderman.jpg";


const Cadastro = () => {
    return (
        <Container>
              <ContainerLogin>
            <Hero1 src={Goku}/>
            <Hero2 src={Logo}/>
            <Hero3 src={SpiderMan}/>]
                <ContainerTitle>
                    <h1>Logo</h1>
                </ContainerTitle>
                <div className="form-actions">
                    <input type='text' id='user' placeholder="Usuário"/><br/>
                    <input type='text' id='name' placeholder="Nome"/><br/>
                    <input type='email' id='email' placeholder="E-mail"/><br/>
                    <input type='password' id='senha' placeholder="Senha"/><br/>
                    <input type='password' id='senha-confirm' placeholder="Confirmar senha"/>
                </div>
                <BtnHandler>
                    <Button>
                        <Link to="/Cadastro">Cadastrar</Link>
                    </Button>
                    
                </BtnHandler>
                <Return>
                    <Link to="/">Voltar ao início</Link>
                </Return>
            </ContainerLogin>
        </Container>
    );
};

export default Cadastro;