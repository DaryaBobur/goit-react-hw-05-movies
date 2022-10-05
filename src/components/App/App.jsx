import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Layout from "components/Layout/Layout";
import CastMovie from "components/MoreInfoAboutMovie/CastMovie";
import ReviewsMovie from "components/MoreInfoAboutMovie/ReviewsMovie";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Layout />}/>
            <Route index element={<Home />}/>
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<CastMovie />}/>
              <Route path="reviews" element={<ReviewsMovie />}/>
            </Route>
            <Route path="/movies" element={<Movies />}/>
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<CastMovie />}/>
              <Route path="reviews" element={<ReviewsMovie />}/>
            </Route>
            <Route path="*" element={<Home />} />
        </Routes>
          
        <ToastContainer 
          autoClose={3000} 
          theme={'colored'}
        />
    </>
  );
};

export default App;
