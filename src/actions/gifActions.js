import axios from "axios";
import actionTypes from "./actionTypes";

export const loadGifs = () => {
  return async function (dispatch) {
    const gifs = await axios.get(
      "https://api.giphy.com/v1/gifs/trending?api_key=6Rl3lvFGAsVWiMjnGf5eUThCtHk24QuJ&limit=24&rating=g"
    );
    dispatch({
      type: actionTypes.LOAD_GIFS,
      payload: gifs.data.data,
    });
  };
};
