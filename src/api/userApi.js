import axios from 'axios';

const api = axios.create({
  baseURL: 'https://contacts-db-backend.onrender.com/api',
  //   timeout: 1000,
});

export const userLogin = async () => {
  let data;
  try {
    await api
      .post(`/users/login`, {
        email: 'connor.jon@mail.com',
        password: 'qwerty123',
      })
      .then(response => {
        // console.log(response.data);
        data = response.data;
      });
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
