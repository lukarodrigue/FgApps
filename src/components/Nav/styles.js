import styled from "styled-components";


export const Container = styled.div`
  
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  cursor: pointer;
  margin-top: 10px;
  justify-content: center;
  display: flex;
  
  &&:hover {
    color: ${({theme}) => theme.COLORS.HOVER }
  }
  
  > select {
    font-size: 16px;
    border: none;
    border-radius: 8px;
    padding: 10px;
  }

  > button {
    font-size: 16px;
    border: none;
    border-radius: 8px;
    padding: 10px;
    margin-left: 15px;
    
  }

  > form {
    font-size: 16px;
    border: none;
    border-radius: 8px;
    padding: 10px;
    margin-left: 15px;
    display: inline;

    label {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-left: 15px;

    }

    input {
    font-size: 16px;
    border: none;
    border-radius: 8px;
    padding: 10px;
    margin-left: 15px;

    }

    button {
    font-size: 16px;
    border: none;
    border-radius: 8px;
    padding: 10px;
    margin-left: 15px;

    }
  }
`
