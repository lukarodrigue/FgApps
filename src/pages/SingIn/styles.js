import styled from "styled-components";
import backgroundImg from "../../assets/background.png"



export const Container = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    height: 100vh;

`

export const Form  = styled.form`
    padding: 0 100px;
    background-color: ${({theme}) => theme.COLORS.GRAY};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 40px auto;

    > h1 {
        font-size: 35px;
        margin: 48px 0 ;
        
    }
`;

export const Background = styled.div`
    width: 150px;
    height: 150px;
    position: absolute;
    background: url(${backgroundImg}) no-repeat center center ;
    background-size: cover;
    top: 75px;
`