import { RxValueNone } from 'react-icons/rx';
import InputCommon from '../../../InputCommon/InputCommon';
import Button from '../../Button/Button';
import styles from './style.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
function Login() {
  const { container, lostPassword, title, boxRememberMe } = styles;
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 character')
        .required('Password is required')
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });
  console.log(formik.errors);
  return (
    <div className={container}>
      <div className={title}>SIGN IN</div>
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

        <div className={boxRememberMe}>
          <input type='checkbox' />
          <span>Remember me</span>
        </div>
        <Button type={'submit'} content={'Login'} />
      </form>
      <div className={lostPassword}>Lost your password?</div>
    </div>
  );
}

export default Login;
