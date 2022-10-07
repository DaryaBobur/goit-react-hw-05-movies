import { useState, useEffect, Suspense } from 'react';
import { useParams, useNavigate, Outlet, useLocation  } from 'react-router-dom';
import { getMoviesDetails } from 'services/getSearchMovies';
import MoreInfoAboutMovie from 'components/MoreInfoAboutMovie/MoreInfoAboutMovie';
import Loader from "components/Loader/Loader";
import AppBar from 'components/AppBar/AppBar';
import MovieInfo from 'pages/MovieDetails/MovieInfo/MovieInfo';
import { ButtonGoBack } from './MovieDetailsStyled';
import { HiArrowSmLeft } from "react-icons/hi";

const MovieDetails = () => {
    
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { movieId } = useParams();
    const navigate = useNavigate();
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
            } 
            catch (error) {
                setError(error)
            }
            finally {
                setIsLoading(false);
            }
        }

        fetchMovie();

    }, [movieId])

    const goBack = () => navigate(from);

    return (
        <>
            <AppBar />
            {movie && <ButtonGoBack type="button" onClick={goBack}><HiArrowSmLeft fontSize={18}/>Go back</ButtonGoBack>}
            {isLoading && <Loader/>}
            {movie && <MovieInfo movie={movie}/>}
            {movie && <MoreInfoAboutMovie/>}
            {error && <p>Please try again later!</p>}
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </>
    )
}

export default MovieDetails;

