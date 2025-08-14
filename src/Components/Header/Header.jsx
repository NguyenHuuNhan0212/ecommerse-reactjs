import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constaints';
import Menu from './Menu/Menu';
import styles from './style.module.scss';
import Logo from '@icons/images/Logo-retina.png';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
function MyHeader() {
  const {
    container,
    containerBoxIcon,
    containerMenu,
    containerBox,
    containerHeader
  } = styles;
  return (
    <div className={container}>
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
            <img width={26} height={26} src={reloadIcon} alt='reloadIcon' />
            <img width={26} height={26} src={heartIcon} alt='heartIcon' />
            <img width={26} height={26} src={cartIcon} alt='cartIcon' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
