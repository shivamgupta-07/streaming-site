import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from '../axios';
import requests from "../requests";


const base_url = "https://image.tmdb.org/t/p/original/";
const Banner = () =>{
    const [movie, setMovie] = useState([]);

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);
    
    const truncate = (str,n) =>{
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }

    return(
        <MovieBanner
            style = {{
                backgroundImage : `url(${base_url}${movie.backdrop_path})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
            }}>
            <BannerContent>
                <BannerTitle>
                    {movie?.title || movie?.name || movie?.original_name}
                </BannerTitle>
    
                <BannerButton>Play</BannerButton>
                <BannerButton>Watch Later</BannerButton>
                <BannerDesc>
                    {truncate(movie?.overview, 150)}
                </BannerDesc>
                
            </BannerContent>
        <BannerFade></BannerFade>  
        </MovieBanner>
    )
}

export default Banner;

const MovieBanner = styled.div`
    position: relative;
    color: white;
    object-fit: contain;
    height: 500px;
    margin-bottom: 10px;
    margin-top: 70px;
`;
const BannerContent = styled.div`
    margin-left: 30px;
    padding-top: 140px;
    height: 190px;
`;
const BannerButton = styled.button`
    cursor: pointer;
    color: #fff;
    font-weight: 700;
    border-radius: 5px;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-right: 1rem;
    padding-top: 0.5rem;
    background-color: #090b13;
    padding-bottom: 0.5rem;
    background-color: rgba(51,51,51,0.5);
    border: 0;

    &:hover{
        color: black;
        background-color: #e6e6e6;
        transition: all 0.2s;
        border: 0;
    }
`;
const BannerDesc = styled.div`
    width: 45rem;
    line-height: 1.3;
    padding-top: 1rem;
    font-size: 0.8rem;
    max-width: 350px;
    height: 80px;
`;

const BannerTitle = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
`;

const BannerFade = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 15rem;  
    background-image: linear-gradient(
        180deg,
        transparent,
        #040714
    );
`;