import { getMovieReviews } from 'api/api';
import Review from 'components/Review';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewsPage = () => {
  const [movieReviews, setMovieReviews] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const handleMovieReviews = async () => {
      const data = await getMovieReviews(movieId);
      if (data.results.length) {
        setMovieReviews(data.results);
      }
    };
    handleMovieReviews();
  }, [movieId]);

  return (
    <>
      {movieReviews ? (
        <Review reviewData={movieReviews} />
      ) : (
        <h3>We don't have any reviews for this movie</h3>
      )}
    </>
  );
};

export default ReviewsPage;
