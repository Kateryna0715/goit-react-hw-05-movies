import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage/index'));
const MoviesPage = lazy(() => import('pages/MoviesPage/index'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('../components/Cast/index'));
const Review = lazy(() => import('../components/Review/index'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>

        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
