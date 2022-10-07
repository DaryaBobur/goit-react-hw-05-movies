import styled from 'styled-components';

export const ButtonGoBack = styled.button`
    display: flex;
    align-items: center;
    min-width: 30px;
    border: 0;
    padding: 5px 5px;
    margin-top: 15px;
    margin-bottom: 15px;
   
    border-radius: 4px;
    color: #2a2a2a;
    
    font-weight: 700;
    font-size: 12px;
    line-height: 1.88;
    letter-spacing: 0.06em;
    background-color: #e0e0e0;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        background-color: #757575;
        color: #ffffff;
    }
`