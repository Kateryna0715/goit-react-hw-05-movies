import CSS from './index.module.css';

const defaultImg =
  'https://t3.ftcdn.net/jpg/02/42/55/40/360_F_242554006_QABMWU31SZoqp4EIOHOPf870aAHlikkz.jpg';

const MovieCard = ({ movieData }) => {
  const { title, popularity, poster_path, overview, genres } = movieData;

  return (
    <div className={CSS.movieContainer}>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
        }
        width={200}
        alt="poster"
        loading="lazy"
      />
      <div className={CSS.movieInfoContainer}>
        <h1>{title}</h1>
        <p>User Score: {Math.round(popularity)} %</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genres && genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieCard;
