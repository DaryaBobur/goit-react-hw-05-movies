import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviewsMovie } from 'services/getSearchMovies';
import Loader from "components/Loader/Loader";
import ReviewsMovieInfo from './ReviewsMovieInfo/ReviewsMovieInfo';
import { Text } from './ReviewsMovieStyled';

const ReviewsMovie = () => {
    
    const [review, setReview] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const {movieId} = useParams();
        
    useEffect(()=> {
        const fetchReviewsMovie = async () => {
            if(!movieId) {
                return;
            }

            setIsLoading(true);
            
            try {
                const data = await getReviewsMovie({ movieId });
                setReview(data);
            } 
            catch (error) {
                setError(error)
            } 
            finally {
                setIsLoading(false);
            }
        }

        fetchReviewsMovie();

    }, [movieId]);

    return (
        <>
            {review && review.data.total_pages === 0 && <Text>We don't have any reviews for this movie!</Text>}
            {review && <ReviewsMovieInfo review={review}/>}
            {isLoading && <Loader/>}
            {error && <p>Please try again later!</p>}
        </>
    )
}
        
export default ReviewsMovie;