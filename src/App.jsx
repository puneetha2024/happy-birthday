import { RouterProvider, createHashRouter, createBrowserRouter } from 'react-router-dom';

import Root from './routes/root';
import ErrorPage from './error-page';

import './App.css';
import { monthsComponents } from './components/months/months';
import MainPage from './components/MainPage';

const mainPage = { index: true, element: <MainPage /> };
const monthsPages = monthsComponents.map(({ month, component }) => ({ path: month, element: component }));

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [mainPage].concat(monthsPages),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
