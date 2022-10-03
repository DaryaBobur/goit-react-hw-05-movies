import { NavLink } from "react-router-dom";

const TrendingMoviesItem = ({ items }) => {
    const item = items.data.results;
return (
    <ul>
        {item.map(({title, id}) => (
        <li key={id}>
        <NavLink to={`${id}`}><h2>{title}</h2></NavLink>
        </li>
        ))} 
    </ul>
)
}

export default TrendingMoviesItem;