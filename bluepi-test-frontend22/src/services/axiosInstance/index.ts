import axios, { AxiosResponse } from 'axios'

const httpClient = axios.create({
    baseURL: '',
  })

// interceptors zone
const serverResponseInterceptor = (response: AxiosResponse): AxiosResponse => {
  return response.data
}
httpClient.interceptors.response.use(serverResponseInterceptor)
//   httpServer.interceptors.request.use(serverRequestInterceptor)
// httpServer.interceptors.response.use(serverResponseInterceptor)



export {
    httpClient
  }
  
