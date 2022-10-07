import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import AppBar from "components/AppBar/AppBar";
import FormSearchMovies from "components/FormSearchMovies/FormSearchMovies";
import MoviesList from "components/MoviesList/MoviesList";
import Loader from "components/Loader/Loader";
import { getSearchQueryMovies } from "services/getSearchMovies";

const Movies = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const onChangeQuery = query => {
    setSearchParams({ query : query });
    setItems([]);
  };

  useEffect(() => {
  
      const getSearchMovies = async () => {

        if(!query) {
          return;
        }  
        setIsLoading(true);
      
        try {
          const data = await getSearchQueryMovies({query});
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
    
  }, [query])
    
  return (
    <>
      <AppBar/>
      <FormSearchMovies onSubmit={onChangeQuery}/>
      {items.length !== 0 && <MoviesList items={items} />}
      {isLoading && <Loader/>}
      {error && <p>Please try again later!</p>}
    </>
  )
}

export default Movies;