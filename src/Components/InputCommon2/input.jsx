import styles from './style.module.scss';
function InputCustom({
  register,
  label,
  type,
  placeholder,
  dataOptions,
  isRequired = false,
  isShowLabel = true,
  isError = false,
  errorMessage = ''
}) {
  const { container, labelClass, error, errorMessageCls } = styles;
  const renderInput = () => {
    if (type == 'text') {
      return (
        <input
          type='text'
          className={isError ? error : ''}
          placeholder={placeholder}
          {...register}
        />
      );
    } else {
      return (
        <select {...register} defaultValue='' className={isError ? error : ''}>
          <option value='' disabled hidden>
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
      {isError && <p className={errorMessageCls}>{errorMessage}</p>}
    </div>
  );
}

export default InputCustom;
