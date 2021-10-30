import axios from 'axios';
import { HOST, PORT } from './utils/CONSTANTS';

export const createUser = async (
  token,
  name,
  phone,
  currentLocation,
  newLocation
) => {
  try {
    console.log(name)
    const res = await axios.get(
      `${HOST}:${PORT}/createuser?token=${token}&phone=${phone}&currentLocation=${currentLocation}&newLocation=${newLocation}&name=${name}`
    );
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


export const createAnswear = async (answear, name, id, uid) => {
  try {
    const res = await axios.get(`${HOST}:${PORT}/addAnswear?answear=${answear}&name=${name}&id=${id}&uid=${uid}`);
    const userFromServer = res.data;
    // console.log(userFromServer)
    return userFromServer;
  } catch (err) {
    console.log(err);
  }
};