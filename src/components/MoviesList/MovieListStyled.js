import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieItem = styled.li`
    :not(:last-child) {
        margin-bottom: 15px;
    }
`

export const MovieLink = styled(NavLink)`
    display: inline-block;
    font-size: 12px;
`

export const Container = styled.div`
    padding-right: 20px;
    padding-left: 20px;
`