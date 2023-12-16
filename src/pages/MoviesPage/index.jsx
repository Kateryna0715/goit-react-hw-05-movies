import Searchbar from 'components/Searchbar/Searchbar';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };
  return (
    <>
      <Searchbar submit={handleSubmit} />
    </>
  );
};

export default MoviesPage;
