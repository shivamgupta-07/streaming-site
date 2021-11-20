import styled from "styled-components";
import Row from './Row';
import requests from "../requests";
import Banner from "./Banner";

const Home = (props) =>{
    return(
        <div>
        <Banner />
        <MovieRow>
            <Row title = "Netflix Originals" fetchUrl = {requests.fetchNetflixOriginals} isLarge  />
            <Row title = "Trending" fetchUrl = {requests.fetchTrending} />
            <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated} />
            <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies} />
            <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies} />
            <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies} />
            <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanceMovies} />
            <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries} />
        </MovieRow>
        </div>
    )
}

export default Home

const MovieRow = styled.div``;