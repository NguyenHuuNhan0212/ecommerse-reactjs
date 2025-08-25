import { useContext } from 'react';
import { SideBarContext } from '../../../contexts/SideBarProvider';
import styles from './style.module.scss';
import SliderCommon from '../../SliderCommon/SliderCommon';
function DetailProduct() {
  const { container } = styles;
  const { detailProduct } = useContext(SideBarContext);

  return (
    <div className={container}>
      <SliderCommon data={detailProduct.images} />
    </div>
  );
}

export default DetailProduct;
