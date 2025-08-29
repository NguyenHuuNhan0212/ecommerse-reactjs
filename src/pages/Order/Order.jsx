import { use, useEffect } from 'react';
import { getDetailOrder } from '../../apis/orderService';

function Order() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const totalAmount = params.get('totalAmount');

  const qrCodeUrl = `https://qr.sepay.vn/img?acc=VQRQADZTQ0798&bank=MBBank&amount=${totalAmount}&des=${id}`;

  const handleGetDetailOrder = async () => {
    try {
      const res = await getDetailOrder(id);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleGetDetailOrder();
  }, []);
  return (
    <div>
      <img src={qrCodeUrl} alt='' />
    </div>
  );
}

export default Order;
