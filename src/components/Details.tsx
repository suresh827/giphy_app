import "./Details.css";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGifById } from "../services/GiphyService";
import Gif from "../models/Gif";
import Result from "./Result";

const Details = () => {
  const id = useParams().id;
  const [gif, setGif] = useState<Gif | null>(null);
  useEffect(() => {
    getGifById(id!).then((response) => {
      setGif(response.data);
    });
  }, []);
  return (
    <div className="Details">
      {gif ? <Result gif={gif}></Result> : <p> Loading</p>}
    </div>
  );
};

export default Details;
