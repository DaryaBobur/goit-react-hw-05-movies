import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import("pages/Home/Home"));
const Movies = lazy(() => import("pages/Movies/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const SharedLayout = lazy(() => import("components/SharedLayout/SharedLayout"));
const CastMovie = lazy(() => import("components/CastMovie/CastMovie"));
const ReviewsMovie = lazy(() => import("components/ReviewsMovie/ReviewsMovie"));


const App = () => {
  return (
    <>
      <Suspense>
          <Routes>
              <Route path="/" element={<SharedLayout />}/>
              <Route index element={<Home />}/>
              <Route path="/movies/:movieId" element={<MovieDetails />}>
                <Route path="cast" element={<CastMovie />}/>
                <Route path="reviews" element={<ReviewsMovie />}/>
              </Route>
              <Route path="movies" element={<Movies />}/>      
              <Route path=":movieId" element={<MovieDetails />}>
                <Route path="cast" element={<CastMovie />}/>
                <Route path="reviews" element={<ReviewsMovie />}/>
              </Route>
              <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
        
        <ToastContainer 
          autoClose={3000} 
          theme={'colored'}
        />
    </>
  );
};

export default App;
