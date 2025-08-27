import { useContext } from 'react';
import { OurShopContext } from '../../../contexts/OurShopProvider';
import MainLayout from '../../../Components/Layout/Layout';
import ProductItem from '../../../Components/ProductItem/ProductItem';
import styles from '../style.module.scss';
import Button from '@components/Button/Button';
import LoadingTextCommon from '../../../Components/LoadingTextCommon/LoadingTextCommon';
function ListProduct() {
  const { isLoadMore, products, isShowGrid, isLoading, handleLoadMore, total } =
    useContext(OurShopContext);
  const { containerProduct, sectionListProduct, loading } = styles;
  return (
    <div className={sectionListProduct}>
      <MainLayout>
        {isLoading ? (
          <div className={loading}>
            <LoadingTextCommon />
          </div>
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
            {products.length < total && (
              <div
                style={{
                  width: '180px',
                  margin: '50px auto 0px'
                }}
              >
                <Button
                  content={
                    isLoadMore ? <LoadingTextCommon /> : 'LOAD MORE PRODUCTS'
                  }
                  onClick={() => handleLoadMore()}
                  isPrimary={false}
                />
              </div>
            )}
          </>
        )}
      </MainLayout>
    </div>
  );
}

export default ListProduct;
