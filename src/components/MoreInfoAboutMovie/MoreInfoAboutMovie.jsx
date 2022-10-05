import { NavLink } from 'react-router-dom';

const MoreInfoAboutMovie = () => {
return (
    <>
        <h2>Additional information</h2>
        <ul>
        <li><NavLink to="cast">Cast</NavLink></li>
        <li><NavLink to="reviews">Reviews</NavLink></li>
        </ul>
    </>
)
}

export default MoreInfoAboutMovie;