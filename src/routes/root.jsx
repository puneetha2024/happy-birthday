import { Link, Outlet } from 'react-router-dom';

import { months } from '../components/months/months';

export default function Root() {
  return (
    <>
      <div id='sidebar'>
        <h1>React Router Contacts</h1>
        <div>
          <form id='search-form' role='search'>
            <input id='q' aria-label='Search contacts' placeholder='Search' type='search' name='q' />
            <div id='search-spinner' aria-hidden hidden={true} />
            <div className='sr-only' aria-live='polite'></div>
          </form>
          <form method='post'>
            <button type='submit'>New</button>
          </form>
        </div>
        <nav>
          <ul>
            {months.map((month) => (
              <li>
                <Link to={month}>Month {month}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id='detail'>
        <Outlet />
      </div>
    </>
  );
}
