const MovieDetailsItem = ( {items} ) => {
    // const item = items.data.results;
    const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';
    console.log(items)
return (
    items.data.results.map(({title, poster_path, overwiew, id})=> (
        <div key={id}>
        <h2>{title}</h2>
        <img src={`${IMG_BASE_URL}${poster_path}`} alt={title} />
        <p>User store: </p>
        <h3>Overwiew</h3>
        <p>{overwiew}</p>
        </div>
        ))
)
}

export default MovieDetailsItem;