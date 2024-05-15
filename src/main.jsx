import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Components/authProvider/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import AllJobs from './Components/AllJobs/AllJobs';
import MyJobs from './Components/MyJobs/MyJobs';
import Blogs from './Components/Blogs/Blogs';
import AddJob from './Components/AddJob/AddJob';
import UpdateJob from './Components/UpdateJob/UpdateJob';
import TextileArts from './Components/TextileArts/TextileArts';

AOS.init();

const BASE_URL = 'https://my-job-server.vercel.app/job';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch(BASE_URL),
      },
      {
        path: '/data/:id',
        element: (
          <PrivateRoute>
            <TextileArts />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${BASE_URL}/${params.id}`),
      },
      {
        path: '/allJobs',
        element: <AllJobs />,
        loader: () => fetch(BASE_URL),
      },
      {
        path: '/addJob',
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: '/dataArt/:id',
        element: <UpdateJob />,
        loader: ({ params }) => fetch(`${BASE_URL}/${params.id}`),
      },
      {
        path: '/myJobs',
        element: (
          <PrivateRoute>
            <MyJobs />
          </PrivateRoute>
        ),
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
