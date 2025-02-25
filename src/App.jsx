import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from "./components/layouts/AppLayout.jsx"
import Home from './pages/Home.jsx';
import Contact, { contactData } from './pages/Contact.jsx';
import Movie from './pages/Movie.jsx';
import Service from './pages/Service.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './pages/ErrorPage.jsx';
import { getMoviesData } from './api/GetAPIData.jsx';
import MovieDetails from './components/UI/MovieDetails.jsx';
import { getMoviesDetails } from './api/GetMovieDetails.jsx';

const App = () => {

  const render = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/movie-website",
          element: <Home />
        },
        {
          path: "/movie-website/contact",
          element: <Contact />,
          action: contactData,
        },
        {
          path: "/movie-website/movie",
          element: <Movie />,
          loader: getMoviesData,
        },
        {
          path: "/movie-website/movie/:movieID",
          element: <MovieDetails />,
          loader: getMoviesDetails,
        },
        {
          path: "/movie-website/service",
          element: <Service />
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={render} />
  )
}

export default App