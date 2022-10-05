import { useState, useEffect } from 'react';
import { useParams, useNavigate, Outlet  } from 'react-router-dom';
import { getMoviesDetails } from 'services/getSearchMovies';
import MoreInfoAboutMovie from 'components/MoreInfoAboutMovie/MoreInfoAboutMovie';

const MovieDetails = () => {
    
const [movie, setMovie] = useState(null);
const [error, setError] = useState(null);
const { movieId } = useParams();
const navigate = useNavigate();

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

useEffect(()=> {
   
    const fetchMovie = async () => {
        if(!movieId) {
            return;
        }

        try {
          const data = await getMoviesDetails({movieId});
          setMovie(data);
        } catch (error) {
            setError(error)
        }
    }

    fetchMovie();

}, [movieId])

const goBack =() => navigate("/");

return (
    <>
{movieId && <button type="button" onClick={goBack}>Go back</button>}

{movie && (

    <div>
        <h2>{movie.data.title}</h2>
        <img src={`${IMG_BASE_URL}${movie.data.poster_path}`} alt="" />
        <p>User score: {Math.round(Number(movie.data.vote_average) * 10) + '%'}</p>
        <h3>Overview</h3>
        <p>{movie.data.overview}</p>
        <h3>Genres</h3>
        {movie.data.genres.map(({name, id}) => (
            <p key={id}>{name}</p>
        ))}
    </div>
)}

{movieId && <MoreInfoAboutMovie />}
{error && <p>Please try again later!</p>}
<Outlet/>
</>
)


}
export default MovieDetails;

