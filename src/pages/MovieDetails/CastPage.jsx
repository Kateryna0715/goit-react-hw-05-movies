import { getMovieCast } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cast from 'components/Cast';

const CastPage = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const handleMovieCast = async () => {
      const data = await getMovieCast(movieId);

      if (data.length) {
        setMovieCast(data);
      }
    };
    handleMovieCast();
  }, [movieId]);

  return <Cast castData={movieCast} />;
};

export default CastPage;
