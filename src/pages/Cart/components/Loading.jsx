import LoadingTextCommon from '../../../Components/LoadingTextCommon/LoadingTextCommon';
import styles from '../style.module.scss';
function LoadingCart() {
  const { loadingCart } = styles;
  return (
    <div className={loadingCart}>
      <LoadingTextCommon />
    </div>
  );
}

export default LoadingCart;
