import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    
    background-color: ${({ theme }) => theme.COLORS.WHITE };
    color:${({ theme }) => theme.COLORS.WHITE};
    
    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 15px;
        width: 100%;

        padding: 13px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900 } ;
        background: transparent;
        border: none;
        border-radius: 8px;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.BACKGROUND_900 };
        }


    }
    
    > svg {
         margin-left: 10px;
         color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
`;