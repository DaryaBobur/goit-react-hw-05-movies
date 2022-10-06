import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCastMovie } from 'services/getSearchMovies';
import img from '../img/imageNotFound.png';


const CastMovie = () => {
const [cast, setCast] = useState(null);


const {movieId} = useParams();
console.log(movieId)
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

useEffect(()=> {
    const fetchCastMovie = async () => {
        if(!movieId) {
            return;
        }

        try {
            const data = await getCastMovie({movieId});
            setCast(data);
        } catch (error) {
            console.log(error.name)
        }
    }
    fetchCastMovie();
}, [movieId]);

return (
cast && (
    <ul>
{cast.data.cast.map(({name, character, profile_path, id}) => (

<li key={id}>
    {profile_path ? <img src={`${IMG_BASE_URL}${profile_path}`} alt={name}/> : <img src={img} alt={name}/>}
    <p>{name}</p>
    <p><b>Character:</b> {character}</p>

</li>

))}
</ul>
   )

)

}

export default CastMovie;