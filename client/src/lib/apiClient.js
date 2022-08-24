import axios from 'axios';

const fetchBins = async () => {
  const response = await axios.get('/api/bins');
  return response.data
}

const deleteBin = async (binId) => {
  const response = await axios.delete(`/api/bins/${binId}`)
  return response.data
}

const createBin = async () => {
  const response = await axios.post('/api/bins')
  return response.data
}

const fetchRequests = async () => {
  const response = await axios.get('/api/requests')
  return response.data;
}

const apiClient = { fetchBins, deleteBin, createBin, fetchRequests }
export default apiClient