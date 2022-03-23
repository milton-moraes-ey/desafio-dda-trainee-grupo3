import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { Hero1, Hero2, Hero3, Hero4, Container, ContainerLogin, ContainerTitle, BtnHandler, Button, Recovery} from './styles';
import Goku from "../../img/goku.png";
import Logo from "../../img/logo.png";
import SpiderMan from "../../img/spiderman.jpg";
import Atomica from "../../img/atomica.png"

const Login = () => {
    const { register, handleSubmit } = useForm();

    function handleSigIn(data) {
        console.log(data)
    }

    return (
        <Container>
              <ContainerLogin>
            <Hero1 src={Goku}/>
            <Hero2 src={Logo}/>
            <Hero3 src={SpiderMan}/>]
                <ContainerTitle>
                    <h1>Logo</h1>
                </ContainerTitle>
                <form className="form-actions" onSubmit={handleSubmit(handleSigIn)}>
                    <input {...register('email')} type='email' id='email' placeholder="E-mail"/><br></br>
                    <input {...register('password')} type='password' id='senha' placeholder="Senha"/>
                    <BtnHandler>
                            <Button type="submit">Login</Button>
                            
                            <Button>
                                <Link to="/Cadastro">Cadastrar</Link>
                            </Button>
                    </BtnHandler>
                </form>
                    <Recovery>
                        <Link to="/Recovery">Recuperar Senha</Link>
                    </Recovery>
                    <Hero4 src={Atomica}/>
            </ContainerLogin>
        </Container>
    );
};

export default Login;