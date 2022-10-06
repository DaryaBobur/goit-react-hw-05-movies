import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import AppBar from "components/AppBar/AppBar";
import FormSearchMovies from "components/FormSearchMovies/FormSearchMovies";
import { getSearchQueryMovies } from "services/getSearchMovies";
import MoviesList from "components/MoviesListTrending/MoviesListTrending";

import Loader from "components/Loader/Loader";
import MovieDetails from "pages/MovieDetails/MovieDetails";

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

          if(!query) {
            return;
          }      
          setIsLoading(true);
    
          try {
            const data = await getSearchQueryMovies();
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
    

    


    return (
        <>
        <AppBar/>
        <FormSearchMovies onSubmit={onChangeQuery}/>
        {items.length !== 0 && <MoviesList items={items} />}

         <MovieDetails/>
        {isLoading && <Loader/>}
        {error && <p>Please try again later!</p>}
        <Outlet/>
        </>
    )
}

export default Movies;