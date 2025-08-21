import styles from './style.module.scss';
function HeaderSideBar({ icon, title }) {
  const { container } = styles;
  return (
    <div className={container}>
      {icon}
      <div>{title}</div>
    </div>
  );
}

export default HeaderSideBar;
