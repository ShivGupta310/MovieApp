import React from 'react'
import {useState, useEffect} from 'react'
import Search from './components/Search.jsx'

const API_BASE_DATA_URL = 'http://www.omdbapi.com/';
const API_BASE_POSTER_URL = 'http://img.omdbapi.com/';
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const API_OPTIONS = {
    method: 'GET',
    headers:{
        accept: 'application/json',
    }

};


const App = () => {

    const [searchTerm, setSearchTerm] = React.useState('Titanic');
    const [errorMessage, setErrorMesaage] = React.useState('');
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = React.useState(false);


    const fetchMovies = async () => {
        setIsLoading(true);
        setErrorMesaage('');

        try{
            const endpoint = `${API_BASE_DATA_URL}?s=${searchTerm}&apikey=${API_KEY}`;
            const response = await fetch (endpoint, API_OPTIONS);

            if(!response.ok){
                throw new Error('Failed to fetch data');
            }
            console.log(response);
            const data = await response.json();
            
            if (data.Response === 'False' ){
                setErrorMesaage(data.Error || 'Error fetching movies. Please try again later.');
                setMovieList([]);
                return;
            }

            setMovieList(data.Search || []);
        } catch(error){
            console.error(`Error fetching movies: ${error}`);
            setErrorMesaage('Error fetching movies. Please try again later.');
        } finally{
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies();
    },[searchTerm]);

   return(
    <main>

        <div className="pattern"/>
        <div className="wrapper">
            <header>
                <img src = "./hero.png" alt="Hero Banner" />
                <h1> Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            </header>
            <section className="all-movies ">
                <h2>All Movies</h2>

                {isLoading ? (
                    <p className='text-white'>Loading...</p>
                ) : errorMessage ? (
                    <p className='text-red-500'>{errorMessage}</p>
                ) : (
                    <ul className="movie-list">
                       {movieList.map((movie) => (
                        <p className='text-white'>{movie.Title}</p>
                       ))}
                    </ul>
                )}

            </section>
        </div>

        
    </main>

   )
}

export default App 