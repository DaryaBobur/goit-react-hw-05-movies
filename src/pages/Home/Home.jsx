import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "components/AppBar/AppBar";
import Loader from "components/Loader/Loader";
import { getSearchTrendingMovies } from "services/getSearchMovies";
import MoviesList from "components/MoviesList/MoviesList";
import MovieDetails from "pages/MovieDetails/MovieDetails";

const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);



    useEffect(() => {

        const fetchTrendingMovies = async () => {
            setIsLoading(true);

          
            try {
                setItems(prev => ([...prev]))
               const data = await getSearchTrendingMovies();
               setItems(data);
            
        } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false);
            }
        }

            fetchTrendingMovies();
    }, [])


    return (
        <>
            <AppBar/>
            {items.length !== 0 && <MoviesList items={items}/>}

            {isLoading && <Loader/>}
            {error && <p>Please try again later!</p>}
            <MovieDetails/>
            <Outlet />
        </>
    )
}

export default Home;