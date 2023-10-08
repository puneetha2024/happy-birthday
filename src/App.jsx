import { RouterProvider, createHashRouter, createBrowserRouter } from 'react-router-dom';

import Root from './routes/root';
import ErrorPage from './error-page';

import './App.css';
import { monthsComponents } from './components/months/months';

const monthsRoute = monthsComponents.map(({ month, component }) => ({ path: month, element: component }));

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: monthsRoute,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
