import Button from '../Button/Button';
import styles from './style.module.scss';
function Banner() {
  const { container, content, title, des } = styles;
  return (
    <div className={container}>
      <div className={content}>
        <h1 className={title}>XStore Marseille04 Demo</h1>
        <div className={des}>
          Make yours celebrations even more special this year width beautiful.
        </div>
        <Button content={'Go to shop'} />
      </div>
    </div>
  );
}

export default Banner;
