import styled  from "styled-components";


export const ContainerModal = styled.div `
  background: rgba(0,0,0,0.60);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
`
export const Modal = styled.div `
  background: #FFFFFF;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: #000;
  }

  padding: 1rem;
  border-radius: .5rem;

  margin: auto;

  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);

  width: 90%;
  max-width: 25rem;
`

export const Button = styled.button`
    color: white;
    height: 35px;
    background-color: red;
    a:link{text-decoration:none};
    a:link{color: white};
    a:visited{color:white};
    border: none;
    border-radius: 20px;
    width: 8rem;
    cursor: pointer;
    margin-right: 1rem;
`;