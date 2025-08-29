import axiosClient from './axiosClient';

const createOrder = async (body) => {
  return await axiosClient.post('/orders', body);
};

const getDetailOrder = async (id) => {
  return await axiosClient.get(`/orders/${id}`);
};
export { createOrder, getDetailOrder };
