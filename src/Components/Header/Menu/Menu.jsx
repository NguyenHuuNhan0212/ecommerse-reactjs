import { useContext, useState } from 'react';
import styles from '../style.module.scss';
import { SideBarContext } from '../../../contexts/SideBarProvider';
import { StoreContext } from '../../../contexts/storeProvider';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
function Menu({ content, href }) {
  const { menu, subMenu } = styles;
  const { setIsOpen, setType } = useContext(SideBarContext);
  const { userInfo, handleLogout } = useContext(StoreContext);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);
  const navigate = useNavigate();
  const handleClickShowLogin = () => {
    if (content === 'Sign In' && !userInfo) {
      setIsOpen(true);
      setType('login');
    }
    if (content === 'Our Shop') {
      navigate('/shop');
    }
  };
  const handleRenderText = (content) => {
    if (content === 'Sign In' && userInfo) {
      return `Hello ${userInfo?.username}`;
    } else {
      return content;
    }
  };
  const handleHover = () => {
    if (content === 'Sign In' && userInfo) {
      setIsShowSubMenu(true);
    }
  };

  return (
    <div
      className={menu}
      onMouseEnter={handleHover}
      onClick={() => handleClickShowLogin()}
    >
      {handleRenderText(content)}
      {isShowSubMenu && (
        <div
          onClick={handleLogout}
          onMouseLeave={() => setIsShowSubMenu(false)}
          className={subMenu}
        >
          LOG OUT
        </div>
      )}
    </div>
  );
}

export default Menu;
