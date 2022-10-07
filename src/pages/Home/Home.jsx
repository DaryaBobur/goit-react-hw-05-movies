import { useState, useEffect } from "react";
import AppBar from "components/AppBar/AppBar";
import Loader from "components/Loader/Loader";
import MoviesList from "components/MoviesList/MoviesList";
import { getSearchTrendingMovies } from "services/getSearchMovies";
import { Title } from "./HomeStyled";
import { Container } from "components/MoviesList/MovieListStyled";

const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchTrendingMovies = async () => {
            setIsLoading(true);      
            try {  
                const data = await getSearchTrendingMovies();
                setItems(data);
            } 
            catch (error) {
                setError(error)
            } 
            finally {
                setIsLoading(false);
            }
        }

        fetchTrendingMovies();

    }, [])

    return (
        <>
            <AppBar/>

            {items.length !== 0 && (
                <Container>
                    <Title>Trending movies</Title>
                    <MoviesList items={items}/>
                </Container>
            )}

            {isLoading && <Loader/>}
            {error && <p>Please try again later!</p>}         
        </>
    )
}

export default Home;