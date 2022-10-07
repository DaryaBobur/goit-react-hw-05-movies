import PropTypes from 'prop-types';
import { ReviewsList } from './ReviewsMovieInfoStyled';


 const ReviewsMovieInfo = ({review}) => {
 return (
    <ReviewsList>
        {review.data.results.map(({author, content}) => (
            <li key={content}>
                <p><b>Author: {author} </b></p>
                <p>{content}</p>    
            </li>
        ))}
    </ReviewsList>
 )
}

ReviewsMovieInfo.propTypes = {
    review: PropTypes.object.isRequired,
}
export default ReviewsMovieInfo;