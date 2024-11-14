import axios from 'axios'
import { DEFAULT_API_HOST_NAME } from '../utils/const'

// axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: DEFAULT_API_HOST_NAME, // 실제 API 기본 URL로 변경
})

// 요청 인터셉터 설정: 요청을 보낼 때마다 로그 출력
axiosInstance.interceptors.request.use(
  (config) => {
    console.log(`%cAxios Request: ${config.method?.toUpperCase()} ${config.url}`, 'color: green; font-weight: bold;')
    return config
  },
  (error) => {
    console.error('Request error:', error)
    return Promise.reject(error)
  },
)

// 응답 인터셉터 설정: 응답을 받을 때마다 로그 출력
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(`%cAxios Response: ${response.status} ${response.config.url}`, 'color: green; font-weight: bold;')
    return response
  },
  (error) => {
    console.error('Response error:', error)
    return Promise.reject(error)
  },
)

export default axiosInstance
