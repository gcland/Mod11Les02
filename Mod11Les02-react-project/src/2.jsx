import React, { useState } from 'react';
import Movie from './movie'

const MoviesList = () => {
    // Initialize state with a list of movies (Task 1)


    // spooky movies
    const [movies, setMovies] = useState(
            [
            {title: "The Nightmare Before Christmas", genre: "Action", desc: "The film follows the misadventures of Jack Skellington, Halloweentown's beloved pumpkin king, who has become bored with the same annual routine of frightening people in the 'real world'. When Jack accidentally stumbles on Christmastown, all bright colors and warm spirits, he gets a new lease on life -- he plots to bring Christmas under his control by kidnapping Santa Claus and taking over the role. But Jack soon discovers even the best-laid plans of mice and skeleton men can go seriously awry."},
            {title: "Beetlejuice", genre: "Romance", desc: "After Barbara (Geena Davis) and Adam Maitland (Alec Baldwin) die in a car accident, they find themselves stuck haunting their country residence, unable to leave the house. When the unbearable Deetzes (Catherine O'Hara, Jeffrey Jones) and teen daughter Lydia (Winona Ryder) buy the home, the Maitlands attempt to scare them away without success. Their efforts attract Beetlejuice (Michael Keaton), a rambunctious spirit whose 'help' quickly becomes dangerous for the Maitlands and innocent Lydia."},
            {title: "Scream", genre: "Action", desc: "Scream is an American murder mystery and meta slasher franchise that includes six films, a television series, merchandise, and games. The first four films were directed by Wes Craven. The series was created by Kevin Williamson, who wrote the first two films and the fourth, and will return to direct the seventh film."}            
            ]);
    
            // Implement required functionalities here
    const [movieDisplay, setmovieDisplay] = useState(true); // boolean to toggle show / hide movie item
    // Starts false to hide movies by default

    const handleRemove = (deletedMovie) => {
        const newMovieList = movies.filter((movie) => movie !== deletedMovie)
        setMovies(newMovieList)
    }

    const handleActionFilter = () => {
        const newMovieList = movies.filter((movie) => movie.genre == "Action")
        setMovies(newMovieList)
    }

    // hide movies -> func is false
    const toggleMovieHide = () => {
        setmovieDisplay(false);
    }
    
    // show movies -> func is true
    const toggleMovieDisplay = () => {
        setmovieDisplay(true);
    }
    return (
        <div>
            <h2>Mod11Les02 - 2</h2>
            
            {/* expression is true ? -> <func to hide> */}
            {movieDisplay ? (
                <div>
                    <h3>Spooky Movies List:</h3>
                    <h4>Click on the movie title for a description</h4>
                    <ul>
                    {movies.map((movie, index) => (
                        <div>
                            <Movie key={index} title={movie.title} desc={movie.desc} genre={movie.genre} /> 
                            <button onClick={() => handleRemove(movie)}> Remove </button>
                        </div>
                    ))
                    }
                    </ul>
                    <button onClick={handleActionFilter}>Show Action Movies Only</button>
                    <div>
                        <button onClick={toggleMovieHide}>Too Scary: Hide Spooky Movies</button>
                    </div>
                </div>
            ) : (
                <button onClick={toggleMovieDisplay}>I'm Brave: Show Spooky Movies</button>
            )
            /* expression is false ? -> <func to show> */
            }
            
        </div>
    );
};
export default MoviesList;