import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding-bottom: 10px;

    p {
        margin-bottom: 15px;
    }

    h3 {
        margin-bottom: 10px;
    }
`

export const Container = styled.div`
    display: block;
    margin-top: 30px;
    padding-left: 20px;
`

export const MovieName = styled.h2`
    font-size: 24px;
    margin-bottom: 15px;
` 
export const Poster = styled.img`
    width: 250px;
    height: auto;
    display: block;
`

export const Genres = styled.div`
    display: flex;

    p {
        :not(:last-child) {
            margin-right: 10px;
        }
    }

`
