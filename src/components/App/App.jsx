import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
  <Routes>
    <Route path="/" element={<Home />}/>
   <Route path="movies" element={<Movies />}/>
  </Routes>
  
  <ToastContainer 
        autoClose={3000} 
        theme={'colored'}
      />
    </>
  );
};

export default App;



// '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.