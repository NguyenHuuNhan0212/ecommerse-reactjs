import axiosClient from './axiosClient';

const register = async (body) => {
  return await axiosClient.post('/register', body);
};

const signIn = async (body) => {
  return await axiosClient.post('/login', body);
};
const getInfo = async () => {
  return await axiosClient.get(
    '/user/info/87ed7140-9ff6-452d-95c2-d1a8cf9c075e'
  );
};
export { register, signIn, getInfo };
