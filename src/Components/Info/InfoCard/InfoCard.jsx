import styles from '../style.module.scss';
function InfoCard({ content, description, src }) {
  const { title, des, containerCard, containerContent } = styles;
  return (
    <div className={containerCard}>
      <img src={src} width={40} height={41} alt='TruckIcon' />
      <div className={containerContent}>
        <span className={title}>{content}</span>
        <span className={des}>{description}</span>
      </div>
    </div>
  );
}

export default InfoCard;
