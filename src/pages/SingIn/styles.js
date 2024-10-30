import styled from "styled-components";




export const Container = styled.div`
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;

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

