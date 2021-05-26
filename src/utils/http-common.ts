import axios from 'axios'

export const HTTP = axios.create({
  baseURL: 'http://localhost:8080/serviceBackend'
})

export const employeesPath = 'employees'
export const servicesPath = 'services'
