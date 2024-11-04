import styled from "styled-components";


export const Container = styled.button`
    width: 100%;
    color: white;
    color: black;
    height: 46px;
    border: 0 ;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;
    font-size: 25px;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.WHITE};
    }
`