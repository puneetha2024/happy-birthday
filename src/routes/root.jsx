import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { months } from '../components/months/months';
import NavigatorButton from '../components/common/NavigatorButton/NavigatorButton';
import './root.css';

export default function Root() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const handleSidebarOpenCloseState = () => {
    isSidebarOpened ? setIsSidebarOpened(false) : setIsSidebarOpened(true);
  };

  const handleGoToHomeButton = () => {
    handleSidebarOpenCloseState();
  };
  return (
    <>
      <button className={`navigatorButton`} onClick={handleSidebarOpenCloseState}>
        {isSidebarOpened ? 'CLOSE' : 'OPEN'}
      </button>
      <div id='sidebar' className={`${isSidebarOpened ? 'sidebarOpened' : 'sidebarClosed'}`}>
        <h1>
          {' '}
          <button onClick={handleGoToHomeButton}>
            <Link to={'/'}>Go to Home</Link>
          </button>
        </h1>
        <div>Months : </div>
        <nav>
          <ul>
            {months.map((month) => (
              <li key={month}>
                <Link to={month} onClick={handleSidebarOpenCloseState}>
                  Month {month}
                </Link>
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
