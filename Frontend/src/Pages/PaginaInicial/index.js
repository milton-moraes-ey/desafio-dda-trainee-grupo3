import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  NavBar,
  Hero1,
  NavLinks,
  ContainerContent,
  WelcomeContent,
  Options,
  ButtonsContent,
  ButtonGroup,
} from "./styles";
import Logo from "../../img/logo.png";
import options from "../../img/options.png";
import { ImExit } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCardList } from "react-icons/bs";

const PaginaInicial = () => {
  return (
    <Container>
      <NavBar>
        <Hero1 src={Logo} />
        <NavLinks>
          <Link to="/PaginaInicial" className="none">
            Página Inicial
          </Link>
          <Link to="/CadastroHeroi" className="none">
            Cadastrar Herói
          </Link>
          <Link to="/MeusHerois" className="none">
            Meus Heróis
          </Link>
          <Link to="" className="none">
            Buscar Herói
          </Link>
          <Link to="/" className="none">
            Sair da Conta &nbsp;
            <ImExit />
          </Link>
        </NavLinks>
      </NavBar>

      <ContainerContent>
        <WelcomeContent>
          <h1>Bem-vindos!</h1>
          <p>
            Quem não gostaria de ser o criador do próximo Super-Homem,
            Homem-Aranha ou Batman?
          </p>

          <p>
            Criar um super-herói ajuda a elaborar histórias e personagens
            interessantes. Mesmo que você só tenha algumas ideias simples agora,
            com alguma dedicação, poderá transformá-las em algo incrível.
          </p>
          <Options src={options} />
        </WelcomeContent>
        <ButtonsContent>
          <Link to="" className="none">
            <ButtonGroup>
              <FiSearch /> HERÓIS CADASTRADOS
            </ButtonGroup>
          </Link>

          <Link to="/CadastroHeroi" className="none">
            <ButtonGroup>
              <AiOutlinePlus /> CADASTRAR HERÓI
            </ButtonGroup>
          </Link>

          <Link to="/MeusHerois" className="none">
            <ButtonGroup>
              <BsCardList /> MEUS HERÓIS
            </ButtonGroup>
          </Link>
        </ButtonsContent>
      </ContainerContent>
    </Container>
  );
};

export default PaginaInicial;
