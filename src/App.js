import requests from "./util";

import "./styles/rows.css";
import "./styles/styles.css";
import "./styles/banner.css";
import "./styles/nav.css";

import Row from "./components/Row";
import Nav from "./components/Nav";
import Banner from "./components/Banner";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title={"Trending Now"}
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row
        title={"Netflix Originals"}
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horrow Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romantice Movies"} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}
