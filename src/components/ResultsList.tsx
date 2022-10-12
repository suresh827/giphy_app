import Gif from "../models/Gif";
import Result from "./Result";
import "./ResultsList.css";

interface Props {
  gifs: Gif[];
}

const ResultsList = ({ gifs }: Props) => {
  return (
    <div className="ResultsList">
      <ul>
        {gifs.map((gif) => (
          <Result gif={gif} key={gif.id} />
        ))}
      </ul>
    </div>
  );
};

export default ResultsList;
