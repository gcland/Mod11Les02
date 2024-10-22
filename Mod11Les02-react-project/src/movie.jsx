import React, { useState } from 'react';
const Movie = ({ title, genre, desc }) => {
    const [movieShow, setmovieShow] = useState(true); // boolean to toggle show / hide movie item
    

    const toggleMovieHidden = () => {
        setmovieShow(false);
    }
    
    const toggleMovieView = () => {
        setmovieShow(true);
    }

    return (
        <div>
        {movieShow ? (
            <div>
                <li onClick={toggleMovieHidden}>{title}</li>
                <p>Genre: {genre}</p>
            </div>
        ) : (
            <div>
                <li onClick={toggleMovieView}>{title}</li>
                <p>Genre: {genre}</p>
                <p>Description: {desc}</p>
            </div>
        )
        }
        </div>
    )
    
}


export default Movie