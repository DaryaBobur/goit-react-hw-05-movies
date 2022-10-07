import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`

export const SearchFormInput = styled.input`
  padding-top: 2px;
  padding-bottom: 2px;
  border-color: gray;
  border-style: solid;
  outline: none;
  border-image: none;
  border-width: 1px ;
  border-radius: 2px;
  font-size: 20px;
  padding-left: 4px;
  padding-right: 4px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }

  :focus {
    border-color: #2196f3;
  }
`

export const ButtonSearchMovie = styled.button`
  display: flex;
  align-items: center;
  min-width: 30px;
  border: 0;
  padding: 7px 7px;
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