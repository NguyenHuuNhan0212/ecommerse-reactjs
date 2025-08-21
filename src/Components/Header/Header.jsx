import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constaints';
import Menu from './Menu/Menu';
import styles from './style.module.scss';
import Logo from '@icons/images/Logo-retina.png';
import { TfiReload } from 'react-icons/tfi';
import { CiHeart } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import useScrollHandling from '../../hooks/useScrollHandling';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '../../contexts/SideBarProvider';
function MyHeader() {
  const {
    container,
    containerBoxIcon,
    containerMenu,
    containerBox,
    containerHeader,
    fixedHeader,
    topHeader
  } = styles;
  const { scrollPosition, scrollDirection } = useScrollHandling();
  const [fixedPosition, setFixedPosition] = useState(false);
  const { setIsOpen, setType } = useContext(SideBarContext);

  const handleOpenSideBar = (type) => {
    setType(type);
    setIsOpen(true);
  };

  useEffect(() => {
    setFixedPosition(scrollPosition > 80);
  }, [scrollPosition]);
  return (
    <div
      className={classNames(container, topHeader, {
        [fixedHeader]: fixedPosition
      })}
    >
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((item, index) => {
              return <BoxIcon key={index} type={item.type} href={item.href} />;
            })}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item, index) => {
              return (
                <Menu key={index} content={item.content} href={item.href} />
              );
            })}
          </div>
        </div>
        <div>
          <img
            src={Logo}
            style={{
              width: '153px',
              height: '53px'
            }}
            alt='Logo'
          />
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, dataMenu.length).map((item, index) => {
              return (
                <Menu key={index} content={item.content} href={item.href} />
              );
            })}
          </div>
          <div className={containerBoxIcon}>
            <TfiReload
              style={{
                fontSize: '20px'
              }}
              onClick={() => handleOpenSideBar('compare')}
            />
            <CiHeart
              style={{
                fontSize: '20px'
              }}
              onClick={() => handleOpenSideBar('wishlist')}
            />
            <IoCartOutline
              style={{
                fontSize: '20px'
              }}
              onClick={() => handleOpenSideBar('cart')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
