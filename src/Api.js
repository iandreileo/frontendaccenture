import axios from 'axios';
import { HOST, PORT } from './utils/CONSTANTS';

export const createUser = async (token) => {
  try {
    const res = await axios.get(`${HOST}:${PORT}/createuser?token=${token}`);
    const response = res.data;
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getUsersInfoAsync = async (idToken) => {
  try {
    const res = await axios.get(`${HOST}:${PORT}/getuser?token=${idToken}`);
    const userFromServer = res.data;
    // console.log(userFromServer)
    return userFromServer;
  } catch (err) {
    console.log(err);
  }
};
