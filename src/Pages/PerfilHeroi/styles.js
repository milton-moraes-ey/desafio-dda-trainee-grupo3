import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
width: 100%;
max-width: 1120px;
height: 100vh;
margin: 0 auto;

h1 {
  color: #FFBC42;
}
`

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

export const ChooseHero = styled.img `
  width: 70%;
`;

export const NavLinks = styled.div `
font-size: 1rem;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: space-between;
width: 40rem;
`;
export const ContainerDeCadastro = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 75%;
  height: 100%;
`;
export const ContainerImagem = styled.div `
  color: #FFBC42;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContainerFormulario =  styled.div`
  color: #FFF;
  font-weight: bold;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputGroup = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  label {
    margin-bottom: 0.5rem;
  };
  input {
    height: 2.5rem;
    margin-bottom: 1rem;
    border-radius: 1rem;
    outline: none;
    padding: 0 12px;
    border: none;
}
`

export const ButtonsGroup = styled.div `
  display: flex;
  justify-content: space-around;
  align-items: center;

 
`;


export const Button = styled.button`
     color: white;
    height: 2.5rem;
    background-color: red;
    a:link{text-decoration:none};
    a:link{color: white};
    a:visited{color:white};
    border: none;
    border-radius: 20px;
    width: 10rem;
    margin-right: 12px;
    margin-top: 1rem;
    cursor: pointer;

`;
