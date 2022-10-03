import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesDetails } from 'services/getSearchMovies';



const MovieDetails = ({items}) => {
const { movieId } = useParams();
const [movie, setMovie] = useState(null);

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

useEffect(()=> {
    const fetchMovie = async () => {
        try {
          const movie = await getMoviesDetails(movieId);
          setMovie(movie);
    console.log(movieId)

        } catch (error) {
            console.log(error)
        }
    }
    fetchMovie()
}, [movieId])

if(!movie) {
    return;
}


return (
<>
{items.data.results.map(({title, poster_path, overwiew})=> (
<>
<h2>{title}</h2>
<img src={IMG_BASE_URL/poster_path} alt="" />
<p>User store: </p>
<h3>Overwiew</h3>
<p>{overwiew}</p>
</>
))}

</>


)


}
export default MovieDetails;