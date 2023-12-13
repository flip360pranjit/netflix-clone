import React,{useState, useEffect} from "react";
import axios from "../../Routes/axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

// const base_url = "https://image.tmdb.org/t/p/w220_and_h330_face";

const base_url = "https://image.tmdb.org/t/p/original";

function Row(props){
    
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay:1,
        },
    };

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(props.fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [props.fetchUrl])

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer(movie?.name || movie?.name|| movie?.original_name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch(error => console.log(error));
        }
    }
    
    return(
        <div className="genre-row">
            <div className="genre-title">
                <h1>{props.title}</h1>
            </div>
            <div className="genre-posters">
                {movies.map((movie) => {
                    if(movie.poster_path && movie.backdrop_path){
                        return(
                                <img key={movie.id} className={`row_poster ${props.isLarge && "large-poster"}`}
                                onClick={() => handleClick(movie)}
                                src={`${base_url}${props.isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                        )
                    }else{
                        return null;
                    }})}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;