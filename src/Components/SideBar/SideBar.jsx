import { useContext } from 'react';
import styles from './style.module.scss';
import { SideBarContext } from '../../contexts/SideBarProvider';
import classNames from 'classnames';
import { RiCloseFill } from 'react-icons/ri';
import Login from '../ContentSideBar/Login/Login';
import Compare from '../ContentSideBar/Compare/Compare';
import WishList from '../ContentSideBar/WishList/WishList';
import Cart from '../ContentSideBar/Cart/Cart';
import DetailProduct from '../ContentSideBar/DetailProduct/DetailProduct';
function SideBar() {
  const { container, overlay, sideBar, boxIcon, slideSideBar } = styles;
  const { isOpen, setIsOpen, type } = useContext(SideBarContext);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleRenderContent = () => {
    switch (type) {
      case 'login':
        return <Login />;
      case 'compare':
        return <Compare />;
      case 'wishlist':
        return <WishList />;
      case 'cart':
        return <Cart />;
      case 'detail':
        return <DetailProduct />;
      default:
        return <Login />;
    }
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
        {handleRenderContent()}
      </div>
    </div>
  );
}

export default SideBar;
