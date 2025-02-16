import React from 'react'

const MovieCard = ({movie:{Title, imdbRating, Poster, Released, Genre}}) => {
    return (
        <div className='movie-card'>
            <img src={Poster ? Poster : './no-movie.png'} alt={Title} />

            <div className='mt-4'>
                <h3>{Title}</h3>
                <div className='content'>
                    <div className='rating'>
                        <img src='./star.svg' alt='Star Icon'/>
                        <p>{imdbRating ? imdbRating.toFixed(1) : 'N/A'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard