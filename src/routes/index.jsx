import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import TechStackPage from '../pages/TechStackPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/techstack',
    element: <TechStackPage />,
    errorElement: <ErrorPage />
  },
])