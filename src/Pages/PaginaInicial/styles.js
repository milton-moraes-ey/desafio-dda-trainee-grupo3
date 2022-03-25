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

export const NavLinks = styled.div `
font-size: 1rem;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: space-between;
width: 40rem;
`;

export const ContainerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;



  p {
    color: #fff;
    line-height: 150%;
}
`;

export const WelcomeContent =styled.div`
  width: 50%;
  height: 100%;

  
  display: flex;
  flex-direction: column;
  justify-content: center;

`;
export const Options = styled.img`
  width: 28rem;
`;

export const ButtonsContent = styled.div`
  width: 50%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;


`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 2rem;
  background: red;
  font-size: 1.2rem;
`;