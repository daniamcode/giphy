import React, {useEffect} from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {loadGifs} from './actions/gifActions';


function App() {
  const dispatch = useDispatch();
  const gifs = useSelector(state => state.gif);
  
  useEffect(()=> {
    dispatch(loadGifs())
  }, [dispatch])


  return (
    <div className="App">
      {gifs.map((gif) => (
        <img key={gif.images.downsized_still.url} src={gif.images.downsized_still.url} alt='' />
      ))}
    </div>
  );
}

export default App;
