import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from "components/Loader/Loader";
import CastMovieInfo from './CastMovieInfo/CastMovieInfo';
import { getCastMovie } from 'services/getSearchMovies';

const CastMovie = () => {
    
    const [cast, setCast] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { movieId } = useParams();


    useEffect(()=> {
        const fetchCastMovie = async () => {

            if(!movieId) {
                return;
            }

            setIsLoading(true);
            
            try {
                const data = await getCastMovie({ movieId });
                setCast(data);
            } 
            catch (error) {
                setError(error);
            }
            finally {
                setIsLoading(false);
            }
        }

        fetchCastMovie();

    }, [movieId]);

    return (
        <>
            {cast && <CastMovieInfo cast={cast}/>}
            {isLoading && <Loader/>}
            {error && <p>Please try again later!</p>}
        </>
    )

}

export default CastMovie;