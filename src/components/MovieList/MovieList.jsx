import MovieListItem from 'components/MovieListItem/MovieListItem';
import CSS from './index.module.css';

const MovieList = ({ movies, onItemClick }) => {
  return (
    <div className={CSS.moviesListContainer}>
      <ul className={CSS.moviesList}>
        {movies.map(movie => (
          <MovieListItem
            key={movie.id}
            movieName={movie.title}
            movieId={movie.id}
            poster_path={movie.poster_path}
          />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
