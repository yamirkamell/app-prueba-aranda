import { useEffect, useState } from 'react';
import axios from "axios";

const MoviesServices = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [moviesFilter, setMoviesFilter] = useState([]);
  const [currentInitial, setCurrenteInitial] = useState(0);
  const [currentFinish, setCurrenteFinish] = useState(5);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search.length < 3 || search === "" || search === null) {
      HandleService();
      return;
    }
  },[]);

  useEffect(() => {
    handlerSearchMovie();
  },[currentInitial, currentFinish, search]);

  const HandleService = () => {
    if (search !== "" || search === null) {
      return;
    }
    axios.get('https://imdb-api.com/en/API/MostPopularMovies/k_so83a40o')
      .then((response) => {
        setMovies(response.data.items.slice(0, 10));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlerSearchMovie = () => {    
    if (search.length < 3 || search === "" || search === null) {
      return;
    }
    setMovies([]);
    setLoading(true);
    axios.get(`https://imdb-api.com/en/API/SearchMovie/k_so83a40o/${search}`)
    .then((response) => {
      console.log(response.data);
      setMoviesFilter([...moviesFilter, ...response.data.results.slice(currentInitial, currentFinish)]);
    })
    .catch((error) => {
      console.log(error);
    });
    setLoading(false);
  };

  const LoadMoreItems = () => {
    setCurrenteInitial(currentInitial + 5);
    setCurrenteFinish(currentFinish + 5);
  };

  return {
    search,
    setSearch,
    movies,
    moviesFilter,
    loading,
    LoadMoreItems
  };

}

export default MoviesServices;