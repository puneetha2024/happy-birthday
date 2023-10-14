import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import NavigatorButton from './components/NavigatorButton/NavigatorButton';
import Sidebar from './components/Sidebar/Sidebar';

export default function Root() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const handleSidebarOpenCloseState = () => {
    isSidebarOpened ? setIsSidebarOpened(false) : setIsSidebarOpened(true);
  };
  const handleCloseSidebar = () => setIsSidebarOpened(false);

  return (
    <>
      <NavigatorButton
        isSidebarOpened={isSidebarOpened}
        handleSidebarOpenCloseStateCallback={handleSidebarOpenCloseState}
      />
      <Sidebar isSidebarOpened={isSidebarOpened} handleCloseSidebarCallback={handleCloseSidebar} />
      <div id='detail'>
        <Outlet />
      </div>
    </>
  );
}
