import axios from 'axios'

export const config = axios.create({
  baseURL: `https://restcountries.eu/rest/v2`
})