import { useContext } from 'react';
import styles from './style.module.scss';
import { SideBarContext } from '../../contexts/SideBarProvider';
import classNames from 'classnames';
import { RiCloseFill } from 'react-icons/ri';
import Login from '../ContentSideBar/Login/Login';
function SideBar() {
  const { container, overlay, sideBar, boxIcon, slideSideBar } = styles;
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={container}>
      <div
        className={classNames({
          [overlay]: isOpen
        })}
        onClick={handleToggle}
      />
      <div
        className={classNames(sideBar, {
          [slideSideBar]: isOpen
        })}
      >
        {isOpen && (
          <div className={boxIcon} onClick={handleToggle}>
            <RiCloseFill />
          </div>
        )}
        <Login />
      </div>
    </div>
  );
}

export default SideBar;
