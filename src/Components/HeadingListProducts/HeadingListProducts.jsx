import CountdownBanner from '../CountdownBanner/CountdownBanner';
import MainLayout from '../Layout/Layout';
import ProductItem from '../ProductItem/ProductItem';
import styles from './style.module.scss';
function HeadingListProducts({ data }) {
  const { container, containerItem } = styles;
  return (
    <MainLayout>
      <div className={container}>
        <CountdownBanner />
        <div className={containerItem}>
          {data.map((item) => {
            return (
              <ProductItem
                key={item._id}
                src={item.images[0]}
                prevSrc={item.images[1]}
                name={item.name}
                price={item.price}
                details={item}
              />
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadingListProducts;
