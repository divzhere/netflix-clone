import "./styles/rows.css";
import Row from "./components/Row";
import requests from "./util";

export default function App() {
  return (
    <div className="App">
      <Row
        title={"Netflix Originals"}
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
    </div>
  );
}
