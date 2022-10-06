import { useState, useEffect, Suspense } from 'react';
import { useParams, useNavigate, Outlet, useLocation  } from 'react-router-dom';
import { getMoviesDetails } from 'services/getSearchMovies';
import MoreInfoAboutMovie from 'components/MoreInfoAboutMovie/MoreInfoAboutMovie';
import Loader from "components/Loader/Loader";
const MovieDetails = () => {
    
const [movie, setMovie] = useState(null);
const [error, setError] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const { movieId } = useParams();
const navigate = useNavigate();


const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const location = useLocation();
const from = location.state?.from ?? "/movies";
useEffect(()=> {
   
    const fetchMovie = async () => {
        if(!movieId) {
            return;
        }
        setIsLoading(true);
        try {
          const data = await getMoviesDetails({movieId});
          setMovie(data);
        } catch (error) {
            setError(error)
        }
        finally {
            setIsLoading(false);
        }
    }

    fetchMovie();

}, [movieId])

const goBack =() => navigate(from);

return (
    <>

{movie && <button type="button" onClick={goBack}>Go back</button>}
{isLoading && <Loader/>}
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



{movie && <MoreInfoAboutMovie/>}
{error && <p>Please try again later!</p>}

<Suspense fallback={<Loader/>}>
<Outlet />
</Suspense>
</>
)


}
export default MovieDetails;

