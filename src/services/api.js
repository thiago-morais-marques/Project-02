import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
});

export const getAllSuits = async () => {
  const response = await api.get('/processos');
  return response.data;
};

export const getOneSuit = async (id) => {
  const response = await api.get(`/processos/${id}`);
  return response.data;
};

export const postSuit = async (formData) => {
  const response = await api.post('/processos', {
    ...formData,
  });
  return response.data;
};

export const editSuit = async (id, formData) => {
  const response = await api.put(`/processos/${id}`, {
    ...formData,
  });
  return response.data;
};

export const deleteSuit = async (id) => {
  const response = await api.delete(`/processos/${id}`);
  return response.data;
};
