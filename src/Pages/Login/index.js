import React from 'react';
import { Link } from "react-router-dom";
import { Hero1, Hero2, Hero3, Hero4, Container, ContainerLogin, ContainerTitle, BtnHandler, Button, Recovery} from './styles';
import Goku from "../../img/goku.png";
import Logo from "../../img/logo.png";
import SpiderMan from "../../img/spiderman.jpg";
import Atomica from "../../img/atomica.png"

const Login = () => {
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
                    <input type='email' id='email' placeholder="E-mail"/><br></br>
                    <input type='password' id='senha' placeholder="Senha"/>
                </div>
                <BtnHandler>
                    <Button>Login</Button>
                    <Button>
                        <Link to="/Cadastro">Cadastrar</Link>
                    </Button>
                    </BtnHandler>
                    <Recovery>
                        <Link to="/Recovery">Recuperar Senha</Link>
                    </Recovery>
                    <Hero4 src={Atomica}/>
            </ContainerLogin>
        </Container>
    );
};

export default Login;