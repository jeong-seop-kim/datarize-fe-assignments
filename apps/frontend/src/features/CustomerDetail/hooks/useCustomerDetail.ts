// src/features/CustomerDetail/hooks/useCustomerDetail.ts
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { API_END_POINT_HOST_NAME } from '../../../utils/const'

const fetchCustomerDetail = async (customerId: string) => {
  const { data } = await axios.get(`${API_END_POINT_HOST_NAME}/api/customer/${customerId}/purchases`)
  return data
}

export const useCustomerDetail = (customerId: string) => {
  return useQuery({
    queryKey: ['customerDetail', customerId],
    queryFn: () => fetchCustomerDetail(customerId),
    enabled: !!customerId, // customerId가 있을 때만 쿼리 실행
  })
}
