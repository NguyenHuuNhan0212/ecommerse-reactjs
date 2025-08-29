import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import cls from 'classnames';
import { getDetailOrder } from '../../../../apis/orderService';
function QrPayment() {
  const {
    container,
    left,
    right,
    title,
    des,
    total,
    statusCls,
    flex,
    paymentMethod
  } = styles;
  const [isSuccess, setIsSuccess] = useState(false);
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const totalAmount = params.get('totalAmount');

  const qrCodeUrl = `https://qr.sepay.vn/img?acc=VQRQADZTQ0798&bank=MBBank&amount=${totalAmount}&des=${id}`;

  let interval;

  const handleGetDetailOrder = async () => {
    if (!id) return;
    try {
      const res = await getDetailOrder(id);
      if (res.data.data.status !== 'pending') {
        clearInterval(interval);
      }
      if (res.data.data.status === 'success') {
        setIsSuccess(true);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    interval = setInterval(() => {
      handleGetDetailOrder();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={container}>
      <div className={left}>
        <h4>quét mã qr để thanh toán</h4>
        <img src={qrCodeUrl} alt='' />
        <p>Sử dụng ứng dụng ngân hàng của bạn để quét mã QR này</p>
      </div>

      <div>
        <div className={right}>
          <h3>Chi tiết thanh toán</h3>
          <div className={cls(flex, title)}>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBNjeNTZ2kVeaUUvgoC0-mw53NL9N6Ib66w&s'
              alt=''
            />
            <div>
              <div>MB Bank</div>
              <div>Chuyển khoản ngân hàng</div>
            </div>
          </div>

          <div className={cls(flex, des)}>
            <div>Chủ tài khoản:</div>
            <div>NGUYEN HUU NHAN</div>
          </div>
          <div className={cls(flex, des)}>
            <div>Số tài khoản:</div>
            <div>1234567890</div>
          </div>
          <div className={cls(flex, des)}>
            <div>Số tiền:</div>
            <div>{totalAmount}(VND)</div>
          </div>
          <div className={cls(flex, des)}>
            <div>Nội dung chuyển khoản:</div>
            <div>{id}</div>
          </div>

          <div className={cls(flex, total)}>
            <div>TOTAL</div>
            <div>{totalAmount}(VND)</div>
          </div>
        </div>
        <div className={paymentMethod}>
          <div>Cách thanh toán</div>
          <div>
            1. Mở ứng dụng ngân hàng của bạn và chọn chức năng quét mã QR.
          </div>
          <div>2. Quét mã QR hiển thị ở bên trái.</div>
          <div>3. Xác nhận thông tin thanh toán và hoàn tất giao dịch.</div>
          <div>
            4. Sau khi thanh toán thành công, vui lòng chờ xác nhận đơn hàng từ
            chúng tôi.
          </div>
        </div>
        <div className={statusCls}>
          <div>Trạng thái đơn hàng:</div>
          <div> {isSuccess ? 'success' : 'pending'} </div>
        </div>
      </div>
    </div>
  );
}

export default QrPayment;
