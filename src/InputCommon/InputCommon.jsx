import { useState } from 'react';
import styles from './style.module.scss';
import { FaRegEye } from 'react-icons/fa6';
import { FaRegEyeSlash } from 'react-icons/fa6';
function InputCommon({ label, type, isRequired = false }) {
  const { container, boxIcon, labelInput, boxInput } = styles;
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const isShowTextPassword =
    type === 'password' && showPassword ? 'text' : type;
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={container}>
      <div className={labelInput}>
        {label} {isRequired && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input type={isShowTextPassword} />
        {isPassword && (
          <div className={boxIcon} onClick={handleShowPassword}>
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputCommon;
