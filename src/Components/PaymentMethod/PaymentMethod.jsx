import styles from './style.module.scss';
function PaymentMethod() {
  const {
    containerMethods,
    textSecure,
    titleMethod,
    boxImgMethods,
    imgMethod
  } = styles;
  const srcMethods = [
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg'
  ];
  return (
    <>
      <div className={containerMethods}>
        <div className={titleMethod}>
          Guaranteed <span>safe</span> checkout
        </div>
        <div className={boxImgMethods}>
          {srcMethods.map((src, index) => {
            return (
              <img key={index} src={src} alt={src} className={imgMethod} />
            );
          })}
        </div>
      </div>
      <div className={textSecure}>You Payment is 100% Secure</div>
    </>
  );
}

export default PaymentMethod;
