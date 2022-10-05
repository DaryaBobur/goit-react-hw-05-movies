import { useState } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';

import { FaSearch } from "react-icons/fa";

const FormSearchMovies = ({ onSubmit }) => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if(searchQuery.trim() === '' ) {
      toast.error('Please enter a word to search for movies!')
      return;
    }
    
    onSubmit(searchQuery);
    resetForm();
  };

  const resetForm = () => {
    setSearchQuery('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      
        <button type="submit">
          <FaSearch fontSize={18}/>
        </button>
      
        <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleSearchQuery}
            name="searchQuery"
            value={searchQuery}
         />
      </form>
    </>
  )
}

FormSearchMovies.propTypes = {
  onSubmit: PropTypes.func,
}

export default FormSearchMovies;