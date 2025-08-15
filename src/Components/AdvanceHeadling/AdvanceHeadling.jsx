import MainLayout from '../Layout/Layout';
import styles from './style.module.scss';
function AdvanceHeadling() {
  const { containerMiddleBox, container, headline, title, des } = styles;
  return (
    <MainLayout>
      <div className={container}>
        <div className={headline}></div>
        <div className={containerMiddleBox}>
          <p className={des}>Don't miss super offers</p>
          <p className={title}>Our best products</p>
        </div>
        <div className={headline}></div>
      </div>
    </MainLayout>
  );
}

export default AdvanceHeadling;
