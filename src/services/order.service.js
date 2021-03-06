import axios from 'axios';
import { constants } from 'utils/constants';

const baseUrl = constants.baseUrl;
const axiosConfig = constants.axiosConfig;

const getAllOrders = () => {
  return axios.get(`${baseUrl}/Order/ActiveOrders`, axiosConfig)
    .then(response => {
      return response;
    }).catch(err => {
      return err
    })
}

const getPendingOrders = () => {
  return axios.get(`${baseUrl}/Order/PendingOrders`, axiosConfig)
    .then(response => {
      return response;
    }).catch(err => {
      return err
    })
}

const getOrder = (id) => {
  return axios.get(`${baseUrl}/Order/${id}`, axiosConfig)
    .then(response => {
      return response;
    }).catch(err => {
      return err
    })
}

const markAsComplete = (id) => {
  return axios.get(`${baseUrl}/Order/completeorder/${id}`, axiosConfig)
    .then(response => {
      return response;
    }).catch(err => {
      return err
    })
}

export const orderService = {
  getAllOrders,
  getPendingOrders,
  markAsComplete,
  getOrder
};
