import React,{useEffect, useState} from "react";
import axios from "../../Routes/axios";
import requests from "../../Routes/requests";
import "./Banner.css";


const base_url = "https://image.tmdb.org/t/p/original";

function Banner(){
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            const data = request.data.results;
            const length = data.length;
            const randomMovie = data[Math.floor(Math.random() * (length-1))]
            setMovie(randomMovie);
            return request;
        }
        fetchData();
    },[])

    function truncate(str, n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }
    

    return(
        <header className="banner" style={{
            backgroundImage: `url(${base_url}${movie.backdrop_path})`,
        }}>
            <div className="banner-content">
                {/* Title */}
                <h1 className="banner-title">
                    {movie?.title || movie?.name|| movie?.original_name}
                </h1>
                {/* Button */}
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>
                {/* Description */}
                <h3 className="banner-description">
                    {truncate(movie?.overview, 150)}
                </h3>
            </div>
            <div className="banner-fade-bottom"></div>
        </header>
    )
}

export default Banner;