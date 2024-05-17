import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { About } from './pages/About';
import {Contact } from './pages/Contact';
import { CentersPage } from './pages/CentersPage';
import { CenterDetail } from './pages/CenterDetail';
import './global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      {
        path: 'pobocky',
        element: <CentersPage />,
        children: [
          { path: ':detailId', element: <CenterDetail /> }, // Používáme detailId
        ],
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);


