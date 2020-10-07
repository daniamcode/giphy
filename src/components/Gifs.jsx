import React from "react";


const Gifs = ({ gif }) => {
  return (
    <div className="card">
      <div className="card__inner">
        <div className="card__front">
          <img src={gif.images.downsized_medium.url} alt="" />
        </div>
        <div className="card__back">
          <h1>{gif.title}</h1>
          <ul>
            <li>
              <strong>Import datetime:</strong> {gif.import_datetime}
            </li>
            <li>
              <strong>Trending datetime:</strong> {gif.trending_datetime}
            </li>
            <li>
              <strong>Username:</strong> {gif.username}
            </li>
            <li>
              <a style={{ color: "yellow" }} href={gif.url} alt="">
                Link to the Original GIF
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Gifs;
