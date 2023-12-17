import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';

// import HomePage from 'pages/HomePage';
// import MoviesPage from 'pages/MoviesPage';
// import MovieDetailsPage from 'pages/MovieDetails/MovieDetailsPage';
// import CastPage from 'pages/MovieDetails/CastPage';
// import ReviewsPage from 'pages/MovieDetails/ReviewsPage';
const HomePage = lazy(() => import('pages/HomePage/index'));
const MoviesPage = lazy(() => import('pages/MoviesPage/index'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetails/MovieDetailsPage')
);
const CastPage = lazy(() => import('pages/MovieDetails/CastPage'));
const ReviewsPage = lazy(() => import('pages/MovieDetails/ReviewsPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>

        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
