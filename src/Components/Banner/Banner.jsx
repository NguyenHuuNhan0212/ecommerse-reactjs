import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './style.module.scss';
function Banner() {
  const { container, content, title, des } = styles;
  const navigate = useNavigate();
  const handleGoToShop = () => {
    navigate('/shop');
  };
  return (
    <div className={container}>
      <div className={content}>
        <h1 className={title}>XStore Marseille04 Demo</h1>
        <div className={des}>
          Make yours celebrations even more special this year width beautiful.
        </div>
        <div
          style={{
            width: '172px'
          }}
          onClick={() => handleGoToShop()}
        >
          <Button content={'Go to shop'} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
