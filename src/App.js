import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Axios from 'axios';
import CharacterGrid from './components/CharacterGrid';

const App = () => {

  const [chars, setchars] = useState([])
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {

    const fetchData = async () => {

      const result =  await Axios(`https://www.breakingbadapi.com/api/characters`)

      setchars(result.data);
      setisLoading(false);
    }

    fetchData()
  }, [])

  return (
    <div className="container">
     <Header />
     <CharacterGrid chars={chars} isLoading={isLoading} />
    </div>
  );
}

export default App;
