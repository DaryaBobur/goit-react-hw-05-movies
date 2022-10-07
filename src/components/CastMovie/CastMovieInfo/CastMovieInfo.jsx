import PropTypes from 'prop-types';
import img from '../../img/imageNotFound.png';
import { CastImg, CastItem, Container } from './CastMovieInfoStyled';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const CastMovieInfo = ({ cast }) => {
    const castInfo = cast.data.cast;
    return (
        <Container>
                <ul>
                    {castInfo.map(({name, character, profile_path, id}) => (
                        <CastItem key={id}>
                            {profile_path ? 
                                <CastImg src={`${IMG_BASE_URL}${profile_path}`} alt={name}/> 
                                : 
                                <CastImg src={img} alt={name}/>
                            }
                            <p>{name}</p>
                            <p>Character: {character}</p>
                        </CastItem>
                    ))}
                </ul>
        </Container>
    )
}

CastMovieInfo.propTypes = {
    cast: PropTypes.object.isRequired,
}

export default CastMovieInfo;