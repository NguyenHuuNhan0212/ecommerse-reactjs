import InputCustom from '../../../../Components/InputCommon2/input';
import { useForm } from 'react-hook-form';
import styles from './style.module.scss';
import cls from 'classnames';
import { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import RightBody from './RightBody';
import { createOrder } from '../../../../apis/orderService';
import { useNavigate } from 'react-router-dom';
import { StepperContext } from '../../../../contexts/StepperProvider';
import { deleteCart } from '../../../../apis/cartService';
import { SideBarContext } from '../../../../contexts/SideBarProvider';

const ON_BASE = 'https://countriesnow.space/api/v0.1';
function CheckOut() {
  const { container, coupon, title, leftBody, rightBody, raw, raw2Column } =
    styles;
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setListProductCart } = useContext(SideBarContext);
  const navigate = useNavigate();
  const { setCurrentStep } = useContext(StepperContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const formRef = useRef();
  console.log(errors);

  const handleExternalSubmit = () => {
    formRef.current.requestSubmit();
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const res = await createOrder(data);

      await deleteCart({ userId: res.data.data.userId });
      setListProductCart([]);
      navigate(
        `/cart?id=${res.data.data._id}&totalAmount=${res.data.data.totalAmount}`
      );

      setCurrentStep(3);
      console.log(res.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
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

        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <div className={cls(raw, raw2Column)}>
            <InputCustom
              label={'First name'}
              isRequired
              type={'text'}
              placeholder='Enter your first name'
              register={register('firstName', {
                required: 'First name is required',
                maxLength: {
                  value: 25,
                  message: 'First name must be at most 25 characters'
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: 'First name must contain only letters'
                }
              })}
              isError={errors.firstName}
              errorMessage={errors.firstName?.message}
            />
            <InputCustom
              label={'Last name'}
              isRequired
              type={'text'}
              placeholder='Enter your last name'
              register={register('lastName', {
                required: 'Last name is required',
                maxLength: {
                  value: 25,
                  message: 'Last name must be at most 25 characters'
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: 'Last name must contain only letters'
                }
              })}
              isError={errors.lastName}
              errorMessage={errors.lastName?.message}
            />
          </div>

          <div className={raw}>
            <InputCustom
              label={'Company name (Optional)'}
              type={'text'}
              placeholder='Enter your company name'
              register={register('companyName', {
                maxLength: {
                  value: 50,
                  message: 'Company name must be at most 50 characters'
                }
              })}
              isError={errors.companyName}
              errorMessage={errors.companyName?.message}
            />
          </div>

          <div className={raw}>
            <InputCustom
              label={'Country / Region'}
              isRequired
              dataOptions={countries}
              placeholder='Select your country or region'
              register={register('country', {
                required: 'Country is required'
              })}
              isError={errors.country}
              errorMessage={errors.country?.message}
            />
          </div>

          <div className={raw}>
            <InputCustom
              label={'Street address'}
              isRequired
              type={'text'}
              placeholder='Enter your street address'
              register={register('street', {
                required: 'Street address is required',
                minLength: {
                  value: 5,
                  message: 'Street address must be at least 5 characters'
                }
              })}
              isError={errors.street}
              errorMessage={errors.street?.message}
            />
          </div>

          <div className={raw}>
            <InputCustom
              label={'Apartment, suite, unit, etc. (optional)'}
              type={'text'}
              isShowLabel={false}
              placeholder='Apartment, suite, unit, etc. (optional)'
              register={register('apartment', {
                maxLength: {
                  value: 30,
                  message: 'Apartment info must be at most 30 characters'
                }
              })}
              isError={errors.apartment}
              errorMessage={errors.apartment?.message}
            />
          </div>
          <div className={raw}>
            <InputCustom
              label={'Town / City'}
              isRequired
              dataOptions={cities}
              placeholder='Enter your town or city'
              register={register('cities', {
                required: 'City is required'
              })}
              isError={errors.cities}
              errorMessage={errors.cities?.message}
            />
          </div>

          <div className={raw}>
            <InputCustom
              label={'State'}
              isRequired
              dataOptions={states}
              placeholder='Select your state'
              register={register('state', {
                required: 'State is required'
              })}
              isError={errors.states}
              errorMessage={errors.states?.message}
            />
          </div>

          <div className={raw}>
            <InputCustom
              label={'Phone'}
              isRequired
              type={'text'}
              placeholder='Enter your phone number'
              register={register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{9,12}$/,
                  message: 'Phone number must be 9-12 digits'
                }
              })}
              isError={errors.phone}
              errorMessage={errors.phone?.message}
            />
          </div>

          <div className={raw}>
            <InputCustom
              label={'ZIP code'}
              type={'text'}
              placeholder='Enter your ZIP code'
              register={register('zipCode', {
                pattern: {
                  value: /^[A-Za-z0-9\- ]{3,10}$/,
                  message: 'ZIP code is invalid'
                }
              })}
              isError={errors.zipCode}
              errorMessage={errors.zipCode?.message}
            />
          </div>

          <div className={raw}>
            <InputCustom
              label={'Email Address'}
              isRequired
              type={'text'}
              placeholder='Enter your email address'
              register={register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Email is invalid'
                }
              })}
              isError={errors.email}
              errorMessage={errors.email?.message}
            />
          </div>
        </form>
      </div>

      <RightBody
        handleExternalSubmit={handleExternalSubmit}
        isLoading={isLoading}
      />
    </div>
  );
}

export default CheckOut;
