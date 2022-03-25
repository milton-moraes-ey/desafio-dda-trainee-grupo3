import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
width: 100%;
max-width: 1120px;
height: 100vh;
margin: 0 auto;
`;

export const NavBar = styled.div`
border-bottom: 1px solid grey;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

export const Hero1 = styled.img `
  width: 20%;
`;

export const NavLinks = styled.div `
font-size: 1rem;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: space-between;
width: 40rem;
`

export const ContainerMeusHerois = styled.div`
  color: #FFBC42;
  text-align: center;
  h2 {
    color: #FFFFFF;
    text-align: left;
  }
`

export const ContainerListaDeHerois = styled.div`
  margin:0 auto;
  text-align: left;
  color: #FFFFFF;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  column-gap: 2rem;
`

export const Heroi = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-evenly;
  background: #FFFFFF;
  color: #000000;
  padding: 14px;
  border-radius: 24px;
`

export const ImagemDoHeroi = styled.img `
  width: 5rem;
  margin-right: 1rem;
  border-radius: .5rem;
  `

  export const AtributosDoHeroi = styled.div `
  margin-right: 1rem;
  `

  export const BotoesDoHeroi = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 7rem;
  font-size: 1.4rem;
  cursor: pointer;
  color: #000000;
  `
