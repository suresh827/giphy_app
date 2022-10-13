import { useEffect, useState } from "react";
import Gif from "../models/Gif";
import { getGifBySearchTerm, getTrendingGifs } from "../services/GiphyService";
import "./Main.css";
import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";
import { useSearchParams } from "react-router-dom";

const Main = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  //const [searchTerm, setSearchTerm] = useState("");
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");
  useEffect(() => {
    if (searchTerm) {
      getGifBySearchTerm(searchTerm).then((response) => {
        setGifs(response.data);
      });
    } else {
      getTrendingGifs().then((response) => {
        setGifs(response.data);
      });
    }
  }, [searchTerm]);

  return (
    <div className="Main">
      <SearchForm /*onFormSubmit={setSearchTerm}*/ />
      <ResultsList gifs={gifs} />
    </div>
  );
};

export default Main;
