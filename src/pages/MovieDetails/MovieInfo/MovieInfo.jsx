import PropTypes from 'prop-types';
import { MovieName, Section, Container, Poster, Genres } from './MovieInfoStyled';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieInfo = ({ movie }) => {
    const {title, poster_path, vote_average, overview, genres, release_date } = movie.data;
    
    const userScore = () => {
        return Math.round(Number(vote_average) * 10) + '%';
    }

    return (
        <Section>
            
            <Poster src={`${IMG_BASE_URL}${poster_path}`} alt={title} />
            <Container>
                <MovieName>{title} ({release_date.slice(0,4)})</MovieName>
                <p>User score: {userScore()}</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <Genres>
                    {genres.map(({ name, id }) => (
                        <p key={id}>{name}</p>
                    ))}
                </Genres>
            </Container>
            
        </Section>
    )
}

MovieInfo.propTypes = {
    movie: PropTypes.object.isRequired,
}

export default MovieInfo;