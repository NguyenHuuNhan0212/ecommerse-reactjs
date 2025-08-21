import InputCommon from '../../../InputCommon/InputCommon';
import Button from '../../Button/Button';
import styles from './style.module.scss';
function Login() {
  const { container, lostPassword, title, boxRememberMe } = styles;
  return (
    <div className={container}>
      <div className={title}>SIGN IN</div>
      <InputCommon label='Username or emmail' type='text' isRequired />
      <InputCommon label='Password' type='password' isRequired />
      <div className={boxRememberMe}>
        <input type='checkbox' />
        <span>Remember me</span>
      </div>
      <Button content={'Login'} />
      <div className={lostPassword}>Lost your password?</div>
    </div>
  );
}

export default Login;
