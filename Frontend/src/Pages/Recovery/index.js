import React from 'react';
import { Link } from "react-router-dom";
import { Hero1, Hero2, Hero3,  Container, ContainerLogin, ContainerTitle, BtnHandler, Button, Text, Return } from './styles';
import Goku from "../../img/goku.png";
import Logo from "../../img/logo.png";
import SpiderMan from "../../img/spiderman.jpg";

const Recovery = () => {
    return (
        <Container>
              <ContainerLogin>
            <Hero1 src={Goku}/>
            <Hero2 src={Logo}/>
            <Hero3 src={SpiderMan}/>]
                <ContainerTitle>
                    <h1>Logo</h1>
                </ContainerTitle>
                <Text>
                    <p>Informe abaixo o seu email de login e em seguida acesse o e-mail para prosseguir com o passo a passo de recuperação de acesso.</p>
                </Text>
                <div className="form-actions">
                    <input type='email' id='email' placeholder="E-mail"/><br></br>
                </div>
                <BtnHandler>
                    <Button>Recuperar Senha</Button>
                </BtnHandler>
                <Return>
                    <Link to="/">Voltar ao início</Link>
                </Return>
            </ContainerLogin>
        </Container>
        
    );
};

export default Recovery;