import React from 'react'
import { NavLink, useLoaderData, useParams } from 'react-router-dom'

const MovieDetails = () => {

    const movieData = useLoaderData();
    console.log(movieData);
    const {
        Actor,
        Poster,
        Title,
        Runtime,
        Genre,
        Writer,
        Type,
        Year,
        Plot,
        BoxOffice,
        imdbID,
        Released,
        Awards,
        imdbRating,
        Actors,
    } = movieData;

    const totalMinutes = Runtime.replace("min", "");
    const hours = Math.floor(totalMinutes / 60); // Calculate the number of hours
    const minutes = totalMinutes % 60; // Calculate the remaining minutes

    // console.log(hours, minutes);

    const formattedTime = `${hours}hr ${minutes}min`;
    // console.log(formattedTime);

    return (

        <div className='row'>
            <div className='col-3 ms-5 mt-5' style={{ marginBottom: "150px" }}>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={Poster} className="card-img-top rounded-3" />
                    <div className="card-body text-center fw-bold fs-4">
                        <NavLink to={"/movie-website"} className="card-link">{Title}</NavLink>
                    </div>
                </div>
            </div>
            <div className='col-6' style={{ marginTop: "70px" }}>
                <ul className="list-group list-group-flush">
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text">{Plot}</p>
                    <p className="card-text"><b>Actors :</b> {Actors}</p>
                    <hr />
                    <p className="card-text"><b>Writer :</b> {Writer}</p>
                    <hr />
                    <p className="card-text"><b>Released :</b> {Released}</p>
                    <hr />
                    <p className="card-text"><b>Rating :</b> {imdbRating}</p>
                    <hr />
                    <p className="card-text"><b>Time :</b> {formattedTime}</p>
                    <hr />
                    <NavLink to={"/movie-website/movie"} className="btn">Go Back</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default MovieDetails
