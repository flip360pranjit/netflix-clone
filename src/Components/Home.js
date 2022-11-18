import React from "react";
import Row from "./Row/Row";
import requests from "../Routes/requests";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLarge={true} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLarge={false} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLarge={false} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLarge={false} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLarge={false} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLarge={false} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLarge={false} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLarge={false} />
    </div>
  );
}

export default Home;
