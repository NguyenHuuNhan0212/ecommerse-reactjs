import styles from './style.module.scss';
function InputCustom({
  register,
  label,
  type,
  placeholder,
  dataOptions,
  isRequired = false,
  isShowLabel = true
}) {
  const { container, labelClass } = styles;
  const renderInput = () => {
    if (type == 'text') {
      return <input type='text' placeholder={placeholder} {...register} />;
    } else {
      return (
        <select {...register}>
          <option value='' disabled selected hidden>
            {placeholder}
          </option>
          {dataOptions.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
      );
    }
  };
  return (
    <div className={container}>
      {isShowLabel && (
        <label className={labelClass}>
          {label} {isRequired && <span>*</span>}
        </label>
      )}

      {renderInput()}
    </div>
  );
}

export default InputCustom;
