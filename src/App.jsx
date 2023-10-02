import { RouterProvider, createHashRouter, createBrowserRouter } from 'react-router-dom';

import Root from './routes/root';
import ErrorPage from './error-page';
import I from './components/months/I';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contacts/:contactId',
        element: <I />,
      },
    ],
  },
  {
    path: 'contacts/:contactId',
    element: <I />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
