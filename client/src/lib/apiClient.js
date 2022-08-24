import axios from 'axios';

const fetchBins = async () => {
  const response = await axios.get('/api/bins');
  return response.data
}

const fetchRequests = async () => {
  const response = await axios.get('/api/requests')
  return response.data;
}

const apiClient = { fetchBins, fetchRequests }
export default apiClient