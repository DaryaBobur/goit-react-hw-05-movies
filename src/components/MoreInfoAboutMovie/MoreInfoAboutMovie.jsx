import { NavLink, useLocation } from 'react-router-dom';

const MoreInfoAboutMovie = () => {
    const location = useLocation();
    const from = location.state?.from ?? "/movies";
return (
    <>
        <h2>Additional information</h2>
        <ul>
        <li><NavLink state={{from}} to="cast">Cast</NavLink></li>
        <li><NavLink state={{from}} to="reviews">Reviews</NavLink></li>
        </ul>
    </>
)
}

export default MoreInfoAboutMovie;