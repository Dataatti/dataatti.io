import axios from 'axios';

export const sendTicketRequest = async values => {
  return axios.post('/api/create-ticket', values);
};
