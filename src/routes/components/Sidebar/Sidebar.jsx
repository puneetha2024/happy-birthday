import { Link } from 'react-router-dom';

import { months } from '../../../components/months/months';
import './Sidebar.css';

const Sidebar = (props) => {
  return (
    <div id='sidebar' className={`sidebar ${props.isSidebarOpened ? 'sidebarOpened' : 'sidebarClosed'}`}>
      <h1>
        {' '}
        <button onClick={props.handleCloseSidebarCallback}>
          <Link to={'/'}>Go to Home</Link>
        </button>
      </h1>
      <div>Months : </div>
      <nav>
        <ul>
          {months.map((month) => (
            <li key={month}>
              <Link to={month} onClick={props.handleCloseSidebarCallback}>
                Month {month}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
