import axios from "axios";

const api = axios.create({
  baseURL: 'https://mercado-api-pge.herokuapp.com/'
})

export default api