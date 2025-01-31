import {useState, useEffect} from 'react'
import Search from './components/Search.jsx'

const API_BASE_DATA_URL = 'http://www.omdbapi.com/';
const API_BASE_POSTER_URL = 'http://img.omdbapi.com/';
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const API_OPTIONS = {
    method: 'GET',
    headers:{
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }

};


const App = () => {

    const [searchTerm, setSearchTerm] = React.useState('');
    const [errorMessage, setErrorMesaage] = React.useState('');

    const fetchMovies = async () => {
        try{

        }
        catch(error){
            console.error(`Error fetching movies: ${error}`);
            setErrorMesaage('Error fetching movies. Please try again later.');
        }
    };

    useEffect(() => {



    },[searchTerm]);

   return(
    <main>

        <div className="pattern"/>
        <div className="wrapper">
            <header>
                <img src = "./hero.png" alt="Hero Banner" />
                <h1> Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
            </header>

            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>
    </main>

   )
}

export default App 