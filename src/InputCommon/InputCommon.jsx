import { useState } from 'react';
import styles from './style.module.scss';
import { FaRegEye } from 'react-icons/fa6';
import { FaRegEyeSlash } from 'react-icons/fa6';
function InputCommon({ label, type, isRequired = false, ...props }) {
  const { container, errMsg, boxIcon, labelInput, boxInput } = styles;
  const { formik, id } = props;
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const isShowTextPassword =
    type === 'password' && showPassword ? 'text' : type;
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const isErr = formik.touched[id] && formik.errors[id];
  const messageErr = formik.errors[id];
  return (
    <div className={container}>
      <div className={labelInput}>
        {label} {isRequired && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input
          id={id}
          type={isShowTextPassword}
          {...props}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values[id]}
        />
        {isPassword && (
          <div className={boxIcon} onClick={handleShowPassword}>
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </div>
        )}
        {isErr && <div className={errMsg}>{messageErr}</div>}
      </div>
    </div>
  );
}

export default InputCommon;
