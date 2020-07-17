import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Axios from 'axios';
import CharacterGrid from './components/CharacterGrid';
import Search from './components/Search';

const App = () => {

  const [chars, setchars] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {

    const fetchData = async () => {

      const result =  await Axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setchars(result.data);
      setisLoading(false);
    }

    fetchData()
  }, [query])

  return (
    <div className="container">
     <Header />
     <br />
     <Search getQuery={(query) => setQuery(query)} />
     <br />
     <CharacterGrid chars={chars} isLoading={isLoading} />
    </div>
  );
}

export default App;
