import React, { useState } from 'react'
import MovieCardList from './MovieCardList'
import ErrorMessage from './ErrorMessage'
import WelcomeMessage from './WelcomeMessage'


function SearchMovies () {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    const [request, setRequest] = useState(false)

    const searchMovies = async (e) => {
        e.preventDefault();
        
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=87ce4a6f312ae195dacc5280a2ced1f1&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url)
            const data  = await res.json()
            // sort items in descending order based on rating
            data.results.sort((a, b) => b.vote_average - a.vote_average)
            setMovies(data.results)
            setRequest(true)
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
            {(function() {
                if (request === false) {
                    return <WelcomeMessage />;
                } else if(request && movies.length < 1){
                    return <ErrorMessage query={query}/>;
                }
                else {
                    return <MovieCardList movies={movies}/>;
                }
                })()
            }
            {/* {(function(){
                if(request === true && movies.length > 0){
                    return
                }
            })()
            } */}
            
   
    </>
    )
}


export default SearchMovies