import axios from "axios";
import GiphyRespose from "../models/GiphyResponse";
import SingleGiphyResponse from "../models/SingleGiphyResponse";

const key: string = process.env.REACT_APP_API_KEY || "";

export const getTrendingGifs = (): Promise<GiphyRespose> => {
  return axios
    .get("https://api.giphy.com/v1/gifs/trending", {
      params: { api_key: key },
    })
    .then((response) => {
      return response.data;
    });
};

export const getGifBySearchTerm = (
  searchTerm: string
): Promise<GiphyRespose> => {
  return axios
    .get("https://api.giphy.com/v1/gifs/search", {
      params: { api_key: key, q: searchTerm },
    })
    .then((response) => {
      return response.data;
    });
};

export const getGifById = (id: string): Promise<SingleGiphyResponse> => {
  return axios
    .get(`https://api.giphy.com/v1/gifs/${encodeURIComponent(id)}`, {
      params: { api_key: key },
    })
    .then((response) => {
      return response.data;
    });
};
