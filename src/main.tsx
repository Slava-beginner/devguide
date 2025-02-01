import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Paths from './pages/Paths.tsx';
import PathDetail from './pages/PathDetail.tsx';
import Languages from './pages/Languages.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/paths',
    element: <Paths />,
  },
  {
    path: '/paths/:id',
    element: <PathDetail />,
  },
  {
    path: '/languages',
    element: <Languages />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);