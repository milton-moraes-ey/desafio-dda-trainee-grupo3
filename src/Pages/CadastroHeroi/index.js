import React from "react";
import { Link } from "react-router-dom";
import {Container, NavBar, NavLinks, Hero1, ContainerDeCadastro,ContainerImagem, ContainerFormulario, InputGroup, ChooseHero, ButtonsGroup } from "./styles";

import Logo from '../../img/logo.png';
import chooseHero from '../../img/chooseHero.png'

import { ImExit, ImPower } from "react-icons/im";
import { AiOutlineUserAdd } from "react-icons/ai";
import { TiSpiral } from "react-icons/ti";


const CadastroHeroi = () => {
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
    
     <ContainerDeCadastro>
       <ContainerImagem>
         <h1>NOVO HERÓI</h1>
         <ChooseHero src={chooseHero} />
        
       </ContainerImagem>
       <ContainerFormulario>
        <form>
            <InputGroup>
              <label>NOME <AiOutlineUserAdd /> </label>
              <input type="text" name="nome" id="nome" />
            </InputGroup>

            <InputGroup>
              <label>PODER <ImPower /> </label>
              <input type="text" name="poder" id="poder" />
            </InputGroup>

            <InputGroup>
              <label>UNIVERSO <TiSpiral /> </label>
              <input type="text" name="universo" id="universo" />
            </InputGroup>

            <ButtonsGroup>
              <button type="submit">CADASTRAR</button>
              <button>ANEXAR IMAGEM</button>
              
            </ButtonsGroup>
        </form>
       </ContainerFormulario>
     </ContainerDeCadastro>
    </Container>
  )
}

export default CadastroHeroi;