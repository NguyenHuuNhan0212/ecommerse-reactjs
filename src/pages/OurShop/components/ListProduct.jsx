import { useContext } from 'react';
import { OurShopContext } from '../../../contexts/OurShopProvider';
import MainLayout from '../../../Components/Layout/Layout';
import ProductItem from '../../../Components/ProductItem/ProductItem';
import styles from '../style.module.scss';
import Button from '@components/Button/Button';

function ListProduct() {
  const { products, isShowGrid, isLoading } = useContext(OurShopContext);
  const { containerProduct } = styles;
  return (
    <>
      <MainLayout>
        {isLoading ? (
          <>Loading...</>
        ) : (
          <>
            <div className={isShowGrid ? containerProduct : ''}>
              {products.map((item, index) => {
                return (
                  <ProductItem
                    key={item._id}
                    src={item.images[0]}
                    prevSrc={item.images[1]}
                    name={item.name}
                    price={item.price}
                    details={item}
                    isHomePage={false}
                  />
                );
              })}
            </div>
            <div
              style={{
                width: '180px',
                margin: '50px auto 0px'
              }}
            >
              <Button content={'LOAD MORE PRODUCTS'} isPrimary={false} />
            </div>
          </>
        )}
      </MainLayout>
    </>
  );
}

export default ListProduct;
