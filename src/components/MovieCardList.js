import { useState } from 'react' 
import MovieCard from './MovieCard'


function MovieCardList({ movies }) {
    return (
        <div className="card-list">
            <MovieCard movies={movies}/>
        </div>
    )
}



export default MovieCardList