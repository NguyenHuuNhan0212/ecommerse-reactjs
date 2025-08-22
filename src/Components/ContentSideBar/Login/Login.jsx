import InputCommon from '../../../InputCommon/InputCommon';
import Button from '../../Button/Button';
import styles from './style.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext, useEffect, useState } from 'react';
import { ToastContext } from '../../../contexts/ToastProvider';
import { getInfo, register, signIn } from '../../../apis/authService';
import Cookies from 'js-cookie';
import { SideBarContext } from '../../../contexts/SideBarProvider';
import { StoreContext } from '../../../contexts/storeProvider';
function Login() {
  const { container, lostPassword, title, boxRememberMe } = styles;
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useContext(ToastContext);
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const { setUserId } = useContext(StoreContext);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 character')
        .required('Password is required'),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match'
      )
    }),
    onSubmit: async (values) => {
      if (isLoading) {
        return;
      }
      const { email: username, password } = values;
      setIsLoading(true);

      if (isRegister) {
        try {
          const res = await register({ username, password });
          // Assuming the API returns a success message
          toast.success(res?.data?.message);
        } catch (err) {
          if (err.response && err.response.data && err.response.data.message) {
            toast.error(err.response.data.message);
          } else {
            toast.error('An error occurred during registration.');
          }
        } finally {
          setIsLoading(false);
        }
      } else {
        // Handling sign in
        try {
          const res = await signIn({ username, password });
          const { id, token, refreshToken } = res?.data;
          setUserId(id);
          Cookies.set('token', token);
          Cookies.set('refreshToken', refreshToken);
          Cookies.set('userId', id);
          toast.success('Signed in successfully'); // CHANGED
          setIsOpen(false);
        } catch (err) {
          console.error('Sign in failed:', err);

          // Use the server's error message if available, otherwise use a generic one
          if (err.response && err.response.data && err.response.data.message) {
            toast.error(err.response.data.message);
          } else {
            toast.error('Sign in failed. Please try again.'); // CHANGED
          }
        } finally {
          setIsLoading(false);
        }
      }
    }
  });
  const handleToggle = () => {
    setIsRegister(!isRegister);
    formik.resetForm();
  };
  return (
    <div className={container}>
      <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>
      <form onSubmit={formik.handleSubmit}>
        <InputCommon
          id={'email'}
          label='Username or emmail'
          type='text'
          isRequired
          formik={formik}
        />

        <InputCommon
          id={'password'}
          label='Password'
          type='password'
          isRequired
          formik={formik}
        />
        {isRegister && (
          <InputCommon
            id={'confirmPassword'}
            label='Confirm password'
            type='password'
            isRequired
            formik={formik}
          />
        )}
        {!isRegister && (
          <div className={boxRememberMe}>
            <input type='checkbox' />
            <span>Remember me</span>
          </div>
        )}

        <Button
          type={'submit'}
          content={isLoading ? 'Loading...' : isRegister ? 'REGISTER' : 'LOGIN'}
        />
      </form>
      <Button
        type={'submit'}
        content={
          isRegister ? 'Already have an account?' : "Don't have an account?"
        }
        isPrimary={false}
        style={{
          marginTop: '10px'
        }}
        onClick={handleToggle}
      />
      {!isRegister && <div className={lostPassword}>Lost your password?</div>}
    </div>
  );
}

export default Login;
