import axios from 'axios';

const api = axios.create({
  baseURL: 'https://contacts-db-backend.onrender.com/api',
  //   timeout: 1000,
});

export const userLogin = async inputValues => {
  let data;
  try {
    await api.post(`/users/login`, { ...inputValues }).then(response => {
      data = response.data;
    });
    return data;
  } catch (error) {
    const { message } = error.response.data;
    alert(message);
  }
};
