import React, { useState } from 'react'
import MovieCardList from './MovieCardList'
import ErrorMessage from './ErrorMessage'


function SearchMovies () {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault();
        
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=87ce4a6f312ae195dacc5280a2ced1f1&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url)
            const data  = await res.json()
            // sort items in descending order based on rating
            data.results.sort((a, b) => b.vote_average - a.vote_average)
            setMovies(data.results)
        }catch(err){
            console.error(err);
        }
    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="button" type="submit">Search</button>
            </form>
            <h2 className="welcomeMessage">Please search for any movie title of your choice in the search bar above</h2>
            {
                movies.length > 0 ? <MovieCardList movies={movies}/> : 
                <ErrorMessage query={query} />
            }
            
   
    </>
    )
}


export default SearchMovies