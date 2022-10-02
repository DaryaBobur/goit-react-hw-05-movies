import PropTypes from 'prop-types';
// import { ButtonLoadMore } from './ButtonStyled';

const ButtonLoadMore = ({ onClick }) => {
    return (
      <button type="button" onClick={() => onClick()}>Load more</button>
    )
}

ButtonLoadMore.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default ButtonLoadMore;