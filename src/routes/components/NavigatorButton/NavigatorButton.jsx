import './NavigatorButton.css';

const NavigatorButton = (props) => {
  return (
    <button className={`navigatorButton`} onClick={props.handleSidebarOpenCloseStateCallback}>
      {props.isSidebarOpened ? 'CLOSE' : 'OPEN'}
    </button>
  );
};

export default NavigatorButton;
