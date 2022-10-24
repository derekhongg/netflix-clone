import React, {useState, useEffect} from 'react';
import "./Banner.css";
import axios from 'axios';
import requests from '../Requests';

const Banner = () => {

    const [movie, setMovie] = useState([]);
    const url = "https://api.themoviedb.org/3"

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(url + requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request;
        }
        fetchData();
    }, []);

    console.log(movie)

    function shortenDescription(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }

    return (
        <header className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition: "center center",
        }}>
            <div className='banner__contents'>
                <h1 className='banner__title'>{movie?.name || movie?.original_name || movie?.title}</h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className='banner__description'>
                    {shortenDescription(`${movie?.overview}`, 150)}
                </h1>
            </div>
            <div className="banner__fadeBottom"/>
        </header>
    )
}

export default Banner