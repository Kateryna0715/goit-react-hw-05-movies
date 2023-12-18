import { getMovieById } from 'api/api';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import CSS from './movieDetails.module.css';
import MovieCard from 'components/MovieCard';
import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;
    const handleMovieDetails = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieById(movieId);
        if (data) {
          setMovieDetails(data);
          setError(false);
        }
      } catch (error) {
        setError(true);
        Notify.failure(
          `Oops! ${error.message}! Please refresh the page and try again`,
          {
            position: 'center-center',
            timeout: 2000,
            width: '500px',
            fontSize: '18px',
          }
        );
      } finally {
        setIsLoading(false);
      }
    };
    handleMovieDetails();
  }, [movieId]);

  return (
    <div className={CSS.Container}>
      <Link to={backLink.current}>
        <button className={CSS.backButton} type="button">
          Go back
        </button>
      </Link>
      {isLoading && <Loader />}
      {!error && movieDetails && (
        <>
          <MovieCard movieData={movieDetails} />
          <div className={CSS.additionalContainer}>
            <p className={CSS.additionalTitle}>Additional information</p>
            <ul className={CSS.additionalList}>
              <li>
                <Link className={CSS.link} to={'cast'}>
                  Cast
                </Link>
              </li>
              <li>
                <Link className={CSS.link} to={'reviews'}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
