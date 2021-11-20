import React, { useState, useEffect } from "react";
import axios from "../axios";
import styled from "styled-components";
import '../Row.css';
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
const Row = ({title, fetchUrl, isLarge}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect( () => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars : {
            autoplay: 1,
        },
    }
    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));

            }).catch((error) => console.log(error));
        }
    }
    return(
        <MovieRow>
            <h3>{title}</h3>
            <PosterRow >
                {movies.map((movie) => ( 
                    <img 
                        src = {`${base_url}${ isLarge ? movie.poster_path : movie.backdrop_path}`} 
                        alt = {movie.name} 
                        key = {movie.id}
                        className = {`poster_row ${isLarge && "large_row"}`}
                        onClick = {() => handleClick(movie)}
                    />
                ))} 
            </PosterRow>
            {trailerUrl && <Youtube videoId= {trailerUrl} opts={opts} />}
        </MovieRow>
    )
}

export default Row;

const MovieRow = styled.div`

    h3{
        margin-left: 25px;
    }
`;

const PosterRow = styled.div`
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 25px;
    padding-top: 0px;
    margin: 0;
    ::-webkit-scrollbar{
        display: none
    }
`;
const largeRow = {
    maxHeight: "250px",
}