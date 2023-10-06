import { RouterProvider, createHashRouter, createBrowserRouter } from 'react-router-dom';

import Root, { loader as rootLoader, action as rootAction } from './routes/root';
import ErrorPage from './error-page';
import I from './components/months/I';
import './App.css';
import Contact from './components/months/I';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
      },
    ],
  },
  {
    path: 'contacts/:contactId',
    element: <Contact />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
