import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  margin-top: 14px;
  
  justify-content: space-between;
  text-align: center;
  
  background-color: ${({theme}) => theme.COLORS.WHITE };
  color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  overflow: hidden;


`

export const Colum = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px;

  background-color: ${({theme}) => theme.COLORS.WHITE };
  color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  border: 1px solid red;

  overflow: hidden;

`