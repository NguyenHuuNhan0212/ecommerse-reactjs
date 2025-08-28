import InputCustom from '../../../../Components/InputCommon2/input';
import { useForm } from 'react-hook-form';
import styles from './style.module.scss';
import cls from 'classnames';
function CheckOut() {
  const { container, coupon, title, leftBody, rightBody, raw, raw2Column } =
    styles;
  const dataOptions = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ];
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  console.log(errors);
  return (
    <div className={container}>
      <div className={leftBody}>
        <p className={coupon}>
          Have a coupon? <span>Click here to enter</span>
        </p>
        <p className={title}>Billing details</p>

        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className={cls(raw, raw2Column)}>
            <InputCustom
              label={'First name'}
              isRequired
              type={'text'}
              placeholder='Enter your first name'
              register={register('firstName', {
                required: true,
                maxLength: 25
              })}
            />
            <InputCustom
              label={'Last name'}
              isRequired
              type={'text'}
              placeholder='Enter your last name'
              register={register('lastName', {
                required: true,
                maxLength: 25
              })}
            />
          </div>

          <div className={raw}>
            <InputCustom
              label={'Company name (Optional)'}
              type={'text'}
              placeholder='Enter your company name'
              register={register('companyName', {})}
            />
          </div>

          <div className={raw}>
            <InputCustom
              label={'Country / Region'}
              isRequired
              dataOptions={dataOptions}
              placeholder='Select your country or region'
              register={register('country', {
                required: true
              })}
            />
          </div>

          <div className={raw}>
            <InputCustom
              label={'Street address'}
              isRequired
              type={'text'}
              placeholder='Enter your street address'
              register={register('street', {
                required: true
              })}
            />
          </div>

          <div className={raw}>
            <InputCustom
              label={'Apartment, suite, unit, etc. (optional)'}
              type={'text'}
              isShowLabel={false}
              placeholder='Apartment, suite, unit, etc. (optional)'
              register={register('apartment', {})}
            />
          </div>
          <div className={raw}>
            <InputCustom
              label={'Town / City'}
              isRequired
              type={'text'}
              placeholder='Enter your town or city'
              register={register('city', {
                required: true
              })}
            />
          </div>

          <div className={raw}>
            <InputCustom
              label={'State'}
              isRequired
              dataOptions={dataOptions}
              placeholder='Select your state'
              register={register('state', {
                required: true
              })}
            />
          </div>

          <div className={raw}>
            <InputCustom
              label={'Phone'}
              isRequired
              type={'text'}
              placeholder='Enter your phone number'
              register={register('phone', {
                required: true
              })}
            />
          </div>

          <div className={raw}>
            <InputCustom
              label={'ZIP code'}
              isRequired
              type={'text'}
              placeholder='Enter your ZIP code'
              register={register('zipCode', {
                required: true
              })}
            />
          </div>

          <div className={raw}>
            <InputCustom
              label={'Email Address'}
              isRequired
              type={'text'}
              placeholder='Enter your email address'
              register={register('email', {
                required: true
              })}
            />
          </div>

          <button type='submit'>submit</button>
        </form>
      </div>

      <div className={rightBody}></div>
    </div>
  );
}

export default CheckOut;
