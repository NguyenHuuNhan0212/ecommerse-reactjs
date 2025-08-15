import MainLayout from '../Layout/Layout';
import { dataInfo } from './constants';
import InfoCard from './InfoCard/InfoCard';
import styles from './style.module.scss';
function Info() {
  const { container } = styles;
  return (
    <MainLayout>
      <div className={container}>
        {dataInfo.map((item, index) => {
          return (
            <InfoCard
              key={index}
              content={item.title}
              description={item.description}
              src={item.src}
            />
          );
        })}
      </div>
    </MainLayout>
  );
}

export default Info;
