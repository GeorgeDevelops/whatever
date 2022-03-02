import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MovieForm from './movieForm';

const MovieDetails = () => {
    const {movieId} = useParams();
    const navigate = useNavigate(); 

    const handleSave = () => {
        // save movie
        navigate('/movies')
    }

        return (
            <React.Fragment>
                    <h2>Movie form: {movieId}</h2>
                    <button onClick={handleSave} className="btn btn-primary m-2">Save</button>
            </React.Fragment>
        );
}
 
export default MovieDetails;