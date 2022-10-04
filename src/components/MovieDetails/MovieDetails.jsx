import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesDetails } from 'services/getSearchMovies';
// import MovieDetailsItem from 'components/MovieDetailsItem/MovieDetailsItem';


const MovieDetails = () => {
    
const [movie, setMovie] = useState(null);
const [error, setError] = useState(null);
const { movieId } = useParams();



// const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

useEffect(()=> {
   
    const fetchMovie = async () => {
        if(!movieId) {
            return;
        }
        try {
          const data = await getMoviesDetails(movieId);
          setMovie(data);
    console.log(data)
        } catch (error) {
            setError(error)
        }
    }
    fetchMovie();
}, [movieId])


// console.log(movieId)
// const {title} = movie;
return (
    <>
{movie && <h2>{movie.title}</h2>}
{error && <p>Please try again later!</p>}
</>
)


}
export default MovieDetails;