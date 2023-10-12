import { RouterProvider, createHashRouter, createBrowserRouter } from 'react-router-dom';

import Root, { loader as rootLoader, action as rootAction } from './routes/root';
import ErrorPage from './error-page';
import I from './components/months/I';
import './App.css';
import Contact, { loader as contactLoader } from './routes/contact';
import EditContact, { action as editAction } from './routes/edit';
import { action as destroyAction } from './routes/destroy';
import Index from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: 'contacts/:contactId/destroy',
        action: destroyAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
