import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviewsMovie } from 'services/getSearchMovies';

const ReviewsMovie = () => {
        const [review, setReview] = useState(null);
        
        const {movieId} = useParams();
        
        useEffect(()=> {
            const fetchReviewsMovie = async () => {
                if(!movieId) {
                    return;
                }
        
                try {
                    const data = await getReviewsMovie({movieId});
                    setReview(data);
                } catch (error) {
                    console.log(error.name)
                }
            }
            fetchReviewsMovie();
        }, [movieId]);
// console.log(review.data)

        return (
  review && (
    review.data.results.map(({author, content, id}) => (
        <div key={author}>
            <p><b>Author: {author} </b></p>
            <p>{content === [] ? content : "no"}</p>
        </div>
    ))
  )
       
  
        )
        
        }
        
     

export default ReviewsMovie;