import { useQuery, useMutation } from 'react-query';
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



export const getItems = async () => {
    const response = await api.get('/items');
    return response.data;
  };
  
  export const useGetItemsQuery = () => {
    return useQuery('items', getItems);
  };
  
  export const createItem = async (itemData) => {
    const response = await api.post('/items/create-item', itemData);
    return response.data;
  };
  
  export const useCreateItemMutation = () => {
    return useMutation(createItem, {
      onSuccess: () => {
        // Optionally, refetch the items query after a successful mutation
        queryClient.refetchQueries('items');
      },
    });
  };
  
  export const getItemById = async (itemId) => {
    const response = await api.get(`/items/${itemId}`);
    return response.data;
  };
  
  export const useGetItemByIdQuery = (itemId) => {
    return useQuery(['item', itemId], () => getItemById(itemId), {
      enabled: !!itemId,
    });
  };
  
  export const updateItem = async (itemId, itemData) => {
    const response = await api.put(`/items/${itemId}`, itemData);
    return response.data;
  };
  
  export const useUpdateItemMutation = () => {
    return useMutation(updateItem, {
      onSuccess: () => {
        queryClient.refetchQueries('items');
      },
    });
  };
  
  export const deleteItem = async (itemId) => {
    const response = await api.delete(`/items/${itemId}`);
    return response.data;
  };
  
  export const useDeleteItemMutation = () => {
    return useMutation(deleteItem, {
      onSuccess: () => {
        queryClient.refetchQueries('items');
      },
    });
  };
  
  