import InputCustom from '../../../../Components/InputCommon2/input';
import { useForm } from 'react-hook-form';
import styles from './style.module.scss';
import cls from 'classnames';
import { useEffect, useState } from 'react';
import axios from 'axios';
import RightBody from './RightBody';

const ON_BASE = 'https://countriesnow.space/api/v0.1';
function CheckOut() {
  const { container, coupon, title, leftBody, rightBody, raw, raw2Column } =
    styles;
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const dataOptions = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  useEffect(() => {
    axios.get(`${ON_BASE}/countries/iso`).then((res) => {
      setCountries(
        res.data.data.map((c) => ({
          value: c.name,
          label: c.name
        }))
      );
    });
  }, []);
  useEffect(() => {
    if (!watch('country')) return;

    if (watch('country' === 'Vietnam' && !localStorage.getItem('listCities'))) {
      axios
        .get(`https://provinces.open-api.vn/api/v2/p/?depth=2`)
        .then((res) => {
          localStorage.setItem('listCities', JSON.stringify(res.data));
          setCities(
            res.data.map((item) => ({
              value: item.codename,
              label: item.name
            }))
          );
          return;
        });
      if (localStorage.getItem('listCities')) {
        const data = JSON.parse(localStorage.getItem('listCities'));
        setCities(
          data.map((item) => ({
            value: item.codename,
            label: item.name
          }))
        );
      }
    }
  }, [watch('country')]);
  useEffect(() => {
    let codeCity;
    if (!watch('cities')) return;

    if (localStorage.getItem('listCities')) {
      const data = JSON.parse(localStorage.getItem('listCities'));
      codeCity = data.find((item) => item.codename === watch('cities')).code;
      axios
        .get(`https://provinces.open-api.vn/api/v2/p/${codeCity}?depth=2`)
        .then((res) => {
          setStates(
            res.data.wards.map((item) => ({
              value: item.codename,
              label: item.name
            }))
          );
        });
    }
  }, [watch('cities')]);
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
              dataOptions={countries}
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
              dataOptions={cities}
              placeholder='Enter your town or city'
              register={register('cities', {
                required: true
              })}
            />
          </div>

          <div className={raw}>
            <InputCustom
              label={'State'}
              isRequired
              dataOptions={states}
              placeholder='Select your state'
              register={register('states', {
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
        </form>
      </div>

      <RightBody />
    </div>
  );
}

export default CheckOut;
