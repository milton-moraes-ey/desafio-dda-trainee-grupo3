import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Hero1, NavBar, NavLinks, ContainerMeusHerois, ContainerListaDeHerois, ImagemDoHeroi, Heroi, AtributosDoHeroi, BotoesDoHeroi } from './styles';
import Logo from '../../img/logo.png';

import { ImExit } from "react-icons/im";
import { TiPencil } from 'react-icons/ti';
import { RiDeleteBin5Line } from 'react-icons/ri';

import DeleteModal from '../DeleteModal';


const MeusHerois = () => {

  const [show, setShow] = useState(false);

  return (
   <Container>
    

     <NavBar>
       <Hero1 src={Logo} />
       <NavLinks>
        <Link to="/" className="none">Página Inicial</Link>
         <Link to="/CadastroHeroi" className="none">Cadastrar Herói</Link>
         <Link to="/MeusHerois" className="none">Meus Heróis</Link>
         <Link to="" className="none">Buscar Herói</Link>
         <Link to="" className="none">Sair da Conta &nbsp;
                <ImExit />
         </Link>
       </NavLinks>
     </NavBar>

     <ContainerMeusHerois>
         <h1>MEUS HERÓIS</h1>
         <h2>PERFIL DOS HERÓIS</h2>
       <ContainerListaDeHerois>
         
         <Heroi>
           <ImagemDoHeroi src={'https://www.superherodb.com/pictures2/portraits/10/050/23160.jpg?v=1606974031'} />
           
            <AtributosDoHeroi>
              <h3>Adam Strange</h3>
              <p><strong>Poderes:</strong> Durability, Energy Beams, Flight, Spaceflight, Stamina</p>
              <p> <strong>Universo:</strong>  DC Animated Universe</p>
            </AtributosDoHeroi>

            <BotoesDoHeroi>
              <Link to="/PerfilHeroi">
                <TiPencil />
              </Link>
              <RiDeleteBin5Line onClick={() => setShow(true)} />
            </BotoesDoHeroi>
         </Heroi>
              
         <Heroi>
           <ImagemDoHeroi src={'https://www.superherodb.com/pictures2/portraits/10/050/23160.jpg?v=1606974031'} />
           
            <AtributosDoHeroi>
              <h3>Adam Strange</h3>
              <p><strong>Poderes:</strong> Durability, Energy Beams, Flight, Spaceflight, Stamina</p>
              <p> <strong>Universo:</strong>  DC Animated Universe</p>
            </AtributosDoHeroi>

            <BotoesDoHeroi>
              <Link to="/PerfilHeroi">
                <TiPencil />
              </Link>
              <RiDeleteBin5Line onClick={() => setShow(true)} />
            </BotoesDoHeroi>
         </Heroi>     
         <Heroi>
           <ImagemDoHeroi src={'https://www.superherodb.com/pictures2/portraits/10/050/23160.jpg?v=1606974031'} />
           
            <AtributosDoHeroi>
              <h3>Adam Strange</h3>
              <p><strong>Poderes:</strong> Durability, Energy Beams, Flight, Spaceflight, Stamina</p>
              <p> <strong>Universo:</strong>  DC Animated Universe</p>
            </AtributosDoHeroi>

            <BotoesDoHeroi>
              <Link to="/PerfilHeroi">
                <TiPencil />
              </Link>
              <RiDeleteBin5Line onClick={() => setShow(true)} />
            </BotoesDoHeroi>
         </Heroi>     
         <Heroi>
           <ImagemDoHeroi src={'https://www.superherodb.com/pictures2/portraits/10/050/23160.jpg?v=1606974031'} />
           
            <AtributosDoHeroi>
              <h3>Adam Strange</h3>
              <p><strong>Poderes:</strong> Durability, Energy Beams, Flight, Spaceflight, Stamina</p>
              <p> <strong>Universo:</strong>  DC Animated Universe</p>
            </AtributosDoHeroi>

            <BotoesDoHeroi>
              <Link to="/PerfilHeroi">
                <TiPencil />
              </Link>
              <RiDeleteBin5Line onClick={() => setShow(true)} />
            </BotoesDoHeroi>
         </Heroi>     
         <Heroi>
           <ImagemDoHeroi src={'https://www.superherodb.com/pictures2/portraits/10/050/23160.jpg?v=1606974031'} />
           
            <AtributosDoHeroi>
              <h3>Adam Strange</h3>
              <p><strong>Poderes:</strong> Durability, Energy Beams, Flight, Spaceflight, Stamina</p>
              <p> <strong>Universo:</strong>  DC Animated Universe</p>
            </AtributosDoHeroi>

            <BotoesDoHeroi>
              <Link to="/PerfilHeroi">
                <TiPencil />
              </Link>
              <RiDeleteBin5Line onClick={() => setShow(true)} />
            </BotoesDoHeroi>
         </Heroi>
              
         <Heroi>
           <ImagemDoHeroi src={'https://www.superherodb.com/pictures2/portraits/10/050/23160.jpg?v=1606974031'} />
           
            <AtributosDoHeroi>
              <h3>Adam Strange</h3>
              <p><strong>Poderes:</strong> Durability, Energy Beams, Flight, Spaceflight, Stamina</p>
              <p> <strong>Universo:</strong>  DC Animated Universe</p>
            </AtributosDoHeroi>

            <BotoesDoHeroi>
              <Link to="/PerfilHeroi">
                <TiPencil />
              </Link>
              <RiDeleteBin5Line onClick={() => setShow(true)} />
            </BotoesDoHeroi>
         </Heroi>

       </ContainerListaDeHerois>
     </ContainerMeusHerois>
     <DeleteModal show={show}/>
     <DeleteModal onClose={() => setShow(false)} show={show}/>

  </Container>
  )
}

export default MeusHerois;