import MainLayout from '../Layout/Layout';
import ProductItem from '../ProductItem/ProductItem';
import styles from './style.module.scss';
function PopularProduct({ data }) {
  console.log(data);
  const { container } = styles;
  return (
    <>
      <MainLayout>
        <div className={container}>
          {data.map((item) => {
            return (
              <ProductItem
                key={item._id}
                src={item.images[0]}
                prevSrc={item.images[1]}
                name={item.name}
                price={item.price}
              />
            );
          })}
        </div>
      </MainLayout>
    </>
  );
}
export default PopularProduct;
