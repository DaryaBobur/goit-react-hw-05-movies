import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 20px;
`

export const CastImg = styled.img`
    display: block;
    width: 150px;
    height: auto;
    margin-bottom: 10px;
`

export const CastItem = styled.li`
    :not(:last-child) {
        margin-bottom: 15px;
    }
`