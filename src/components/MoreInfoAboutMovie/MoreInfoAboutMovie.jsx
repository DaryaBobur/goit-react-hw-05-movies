import { NavLink, useLocation } from 'react-router-dom';
import { Wrap } from './MoreInfoAboutMovieStyled';
const MoreInfoAboutMovie = () => {
    
    const location = useLocation();
    const from = location.state?.from ?? "/movies";

    return (
        <Wrap>
            <h2>Additional information</h2>

            <ul>
                <li>
                    <NavLink state={{from}} to="cast">Cast</NavLink>
                </li>
                
                <li>
                    <NavLink state={{from}} to="reviews">Reviews</NavLink>
                </li>
            </ul>
        </Wrap>
    )
}

export default MoreInfoAboutMovie;