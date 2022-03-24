import styled from 'styled-components';




export const Hero1 = styled.img`
    height: 10em;
    position: absolute;
    top: -80px;
    left: -60px;
    z-index: 0;
`;

export const Hero2 = styled.img`
    position: absolute;
    height: 110px;
    top: 45px;
    left: -1px;
`;

export const Hero3 = styled.img`
 height: 120px;
 position: absolute;
 top: 12px;
 left: 200px;
 border-radius: 10px;
`;

export const Hero4 = styled.img`
    position: absolute;
    height: 60px;
    left: 40px;
    top: 330px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 6.7%;
`;

export const ContainerLogin = styled.div`
    background-color: #030303;
    width: 19em;
    height: 26.5em;
    border-radius: 20px;
    border: solid;
    border-color: red;
    z-index: 1;
    position: absolute;
    text-align: center;
    
    
    

   .form-actions input {
       background-color: #FFF;
       display: block;
       margin: 0 auto;
       height: 20px;
       width: 80%;
       border-radius: 20px;
       border: none;
       
    }
    input::placeholder {
        padding-left: 10px;
        
    }
`

export const ContainerTitle = styled.div`
    font-size: 30px;
    color: black;
    display: flex;
    justify-content: center;
`;


export const BtnHandler = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
    
`;

export const Button = styled.button`
    color: white;
    height: 35px;
    background-color: red;
    a:link{text-decoration:none};
    a:link{color: white};
    a:visited{color:white};
    border: none;
    border-radius: 20px;
    width: 100px;

`;

export const Return = styled.h1`
    color: white;
    a:link{text-decoration:none};
    a:link{color: white};
    a:visited{color:white};
    font-size: 12px;
    margin-top: 30px;
`;

