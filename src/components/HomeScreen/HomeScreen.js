import React from 'react';
import "./HomeScreen.css";
import Nav from '../Nav/Nav';
import Banner from '../Banner/Banner';
import requests from '../Requests';
import Row from '../Row/Row';

export const HomeScreen = () => {

    const url = "https://api.themoviedb.org/3"
    return (
        <div className="homeScreen">
            <Nav />

            <Banner />

            <Row title="NETFLIX ORIGINALS" fetchUrl={url + requests.fetchNetflixOriginals} isLargeRow/>
            <Row title="Trending Now" fetchUrl={url + requests.fetchTrending}/>
            <Row title="Top Rated" fetchUrl={url + requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={url + requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={url + requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchUrl={url + requests.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchUrl={url + requests.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchUrl={url + requests.fetchDocumentariess}/>
        </div>
    )
}
