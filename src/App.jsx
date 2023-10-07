import { RouterProvider, createHashRouter, createBrowserRouter } from 'react-router-dom';

import Root, { loader as rootLoader, action as rootAction } from './routes/root';
import ErrorPage from './error-page';
import I from './components/months/I';
import './App.css';
import Contact, { loader as contactLoader } from './routes/contact';
import EditContact from './routes/edit';

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
        loader: contactLoader,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        loader: contactLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
