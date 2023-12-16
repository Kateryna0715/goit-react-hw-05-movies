import { getTrendingMovies } from 'api/api';
import MovieList from 'components/MovieList';
import { useEffect, useState } from 'react';
import CSS from './index.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const handleMovies = async () => {
      const data = await getTrendingMovies();
      if (data.results.length) {
        setMovies(data.results);
      }
    };
    handleMovies();
  }, []);

  return (
    <>
      <h1 className={CSS.title}>Trending today</h1>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
