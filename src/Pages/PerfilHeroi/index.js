import React from "react";
import { Link } from "react-router-dom";
import {Container, NavBar, NavLinks, Hero1, ContainerDeCadastro,ContainerImagem, ContainerFormulario, InputGroup, ChooseHero, ButtonsGroup, Button } from "./styles";

import Logo from '../../img/logo.png';

import { ImExit, ImPower } from "react-icons/im";
import { AiOutlineUserAdd } from "react-icons/ai";
import { TiSpiral } from "react-icons/ti";


const PerfilHeroi = () => {

  return (
    <Container>

    <NavBar>
       <Hero1 src={Logo} />
       <NavLinks>
        <Link to="/PaginaInicial" className="none">Página Inicial</Link>
         <Link to="/CadastroHeroi" className="none">Cadastrar Herói</Link>
         <Link to="/MeusHerois" className="none">Meus Heróis</Link>
         <Link to="" className="none">Buscar Herói</Link>
         <Link to="/" className="none">Sair da Conta &nbsp;
                <ImExit />
         </Link>
       </NavLinks>
     </NavBar>

     <h1>PERFIL DO HERÓI</h1>
    
     <ContainerDeCadastro>
       <ContainerImagem>
         <h2>ADAM STRANGE</h2>
         <ChooseHero src={'https://www.superherodb.com/pictures2/portraits/10/050/23160.jpg?v=1606974031'} />
        
       </ContainerImagem>
       <ContainerFormulario>
        <form>
            <InputGroup>
              <label>NOME <AiOutlineUserAdd /> </label>
              <input type="text" name="nome" id="nome" value={'ADAM STRANGE'}/>
            </InputGroup>

            <InputGroup>
              <label>PODER <ImPower /> </label>
              <input type="text" name="poder" id="poder" value={'Durability, Energy Beams, Flight, Spaceflight, Stamina'}/>
            </InputGroup>

            <InputGroup>
              <label>UNIVERSO <TiSpiral /> </label>
              <input type="text" name="universo" id="universo" value={'DC Animated Universe'}/>
            </InputGroup>

            <ButtonsGroup>
              <Button>EDITAR</Button>
              <Button>DELETAR</Button>
              
            </ButtonsGroup>
        </form>
       </ContainerFormulario>
     </ContainerDeCadastro>
    </Container>
  )
}

export default PerfilHeroi;