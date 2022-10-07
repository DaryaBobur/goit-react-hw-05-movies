import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: #2a2a2a;
  padding-bottom: 15px;
  padding-top: 15px;

  &.active {
      color: red;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: pink;
  }
`

export const NavList = styled.ul`
  display: flex;
  padding-right: 20px;
`

export const NavItem = styled.li`
  display: flex;

  :not(:last-child) {
    margin-right: 15px;
  }
`

export const Header = styled.header`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`