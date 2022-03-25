import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  NavBar,
  NavLinks,
  Hero1,
  ContainerDeCadastro,
  ContainerImagem,
  ContainerFormulario,
  InputGroup,
  ChooseHero,
  ButtonsGroup,
} from "./styles";

import Logo from "../../img/logo.png";
import chooseHero from "../../img/chooseHero.png";

import { ImExit, ImPower } from "react-icons/im";
import { AiOutlineUserAdd } from "react-icons/ai";
import { TiSpiral } from "react-icons/ti";

const CadastroHeroi = () => {
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);

  const handleImage = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  
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

      <ContainerDeCadastro>
        <ContainerImagem>
          <h1>NOVO HERÓI</h1>
          <ChooseHero src={imgData} />
        </ContainerImagem>
        <ContainerFormulario>
          <form>
            <InputGroup>
              <label>
                NOME <AiOutlineUserAdd />{" "}
              </label>
              <input type="text" name="nome" id="nome" />
            </InputGroup>

            <InputGroup>
              <label>
                PODER <ImPower />{" "}
              </label>
              <input type="text" name="poder" id="poder" />
            </InputGroup>

            <InputGroup>
              <label>
                UNIVERSO <TiSpiral />{" "}
              </label>
              <input type="text" name="universo" id="universo" />
            </InputGroup>

            <ButtonsGroup>
              <button type="submit">CADASTRAR</button>

              <label htmlFor="image-file">ANEXAR IMAGEM</label>
              <input
                type="file"
                id="image-file"
                name="image-file"
                onChange={handleImage}
              />
            </ButtonsGroup>
          </form>
        </ContainerFormulario>
      </ContainerDeCadastro>
    </Container>
  );
};

export default CadastroHeroi;
