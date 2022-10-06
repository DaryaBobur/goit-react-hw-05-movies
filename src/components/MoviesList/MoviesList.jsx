import { NavLink, useLocation } from "react-router-dom";

const MoviesList = ({ items }) => {
    const item = items.data.results;

    const location = useLocation();

return (
    <ul>
        {item.map(({title, id}) => (
        <li key={id}>
        <NavLink state={{from: location}} to={`${id}`}><h2>{title}</h2></NavLink>
        </li>
        ))} 
    </ul>
)
}

export default MoviesList;