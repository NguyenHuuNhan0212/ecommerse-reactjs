import { useState } from 'react';
import styles from './style.module.scss';
import cls from 'classnames';
import { RiArrowDownWideFill } from 'react-icons/ri';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
function AccordionMenu({ isSelected, titleMenu, contentJsx, onClick }) {
  const {
    container,
    contentMenu,
    isVisibility,
    borderBottom,
    title,
    activeTitle
  } = styles;
  const handleToggle = () => {
    onClick();
  };
  return (
    <div className={container}>
      <div
        className={cls(title, {
          [activeTitle]: isSelected
        })}
        onClick={() => handleToggle()}
      >
        {isSelected ? (
          <TfiLayoutLineSolid
            style={{
              fontSize: '20px'
            }}
          />
        ) : (
          <RiArrowDownWideFill
            style={{
              fontSize: '20px'
            }}
          />
        )}
        {titleMenu}
      </div>
      <div
        className={cls(contentMenu, borderBottom, {
          [isVisibility]: isSelected
        })}
      >
        {contentJsx}
      </div>
    </div>
  );
}

export default AccordionMenu;
