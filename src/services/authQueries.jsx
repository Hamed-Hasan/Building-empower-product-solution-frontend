import { useMutation } from 'react-query';
import api from '../utils/api';


export const signup = async (userData) => {
  const response = await api.post('/auth/signup', userData);
  return response.data;
};

export const useSignupMutation = () => {
  return useMutation(signup);
};

export const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const useLoginMutation = () => {
  return useMutation(login);
};