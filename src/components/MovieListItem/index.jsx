import CSS from './index.module.css';
import { Link, useLocation } from 'react-router-dom';
const defaultImg =
  'https://t3.ftcdn.net/jpg/02/42/55/40/360_F_242554006_QABMWU31SZoqp4EIOHOPf870aAHlikkz.jpg';

const MovieListItem = ({ movieName, movieId, poster_path }) => {
  const location = useLocation();
  return (
    <li className={CSS.galleryItem}>
      <Link
        className={CSS.link}
        to={`movies/${movieId}`}
        state={{ from: location }}
      >
        <img
          className={CSS.posterImg}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          width={400}
          alt="film_poster"
        />
        <h2 className={CSS.movieTitle}>{movieName}</h2>
      </Link>
    </li>
  );
};

export default MovieListItem;
