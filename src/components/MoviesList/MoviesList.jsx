import { NavLink } from "react-router-dom";

const MoviesList = ({ items }) => {

    const item = items.data.results;

return (
    <>
    <h1>Trending movies</h1>
    <ul>
        {item.map(({title, id}) => (
        <li key={id}>
        <NavLink to={`${id}`}><h2>{title}</h2></NavLink>
        </li>
        ))} 
    </ul>
    </>
)
}

export default MoviesList;