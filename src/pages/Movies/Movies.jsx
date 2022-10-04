import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import AppBar from "components/AppBar/AppBar";
import FormSearchMovies from "components/FormSearchMovies/FormSearchMovies";
import { getSearchQueryMovies } from "services/getSearchMovies";
import TrendingMoviesItem from "components/TrendingMoviesItem/TrendingMoviesItem";
import ButtonLoadMore from "components/ButtonLoadMore/ButtonLoadMore";
import Loader from "components/Loader/Loader";
import MovieDetails from "components/MovieDetails/MovieDetails";




const Movies = () => {

    const [items, setItems] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const onChangeQuery = query => {
      setQuery(query);
      setPage(1);
      setItems([]);
    };

    useEffect(() => {
  
        const getSearchMovies = async () => {
          const params = { query: query, page };
          if(!query) {
            return;
          }      
    
          try {
            setIsLoading(true);
            const data = await getSearchQueryMovies(params);
            setItems(data)       

            } 
            catch (error) {
              setError(error);
            } 
            finally {
              setIsLoading(false);
          }
        }
    
        getSearchMovies();
    
      }, [page, query])
    
      const loadMore =() => {
        setPage((prevPage) => prevPage + 1)
      }
    


    return (
        <>
        <AppBar/>
        <FormSearchMovies onSubmit={onChangeQuery}/>
        {items.length !== 0 && <TrendingMoviesItem items={items} />}
        {items.length !== 0 && <ButtonLoadMore onClick={loadMore} />}
         <MovieDetails/>
        {isLoading && <Loader/>}
        {error && <p>Please try again later!</p>}
        <Outlet/>
        </>
    )
}

export default Movies;