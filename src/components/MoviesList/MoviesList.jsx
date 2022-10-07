import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { MovieItem, MovieLink } from "./MovieListStyled";

const MoviesList = ({ items }) => {
    const item = items.data.results;
    const location = useLocation();

    return (
        <ul>
            {item.map(({title, id}) => (
                <MovieItem key={id}>
                    <MovieLink state={{from: location}} to={`/movies/${id}`}>
                        <h2>{title}</h2>
                    </MovieLink>
                </MovieItem>
            ))} 
        </ul>
    )
}

MoviesList.propTypes = {
    items: PropTypes.object.isRequired,
}

export default MoviesList;