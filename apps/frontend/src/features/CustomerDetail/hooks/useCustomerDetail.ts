// src/features/CustomerDetail/hooks/useCustomerDetail.ts
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { API_END_POINT_HOST_NAME } from '../../../utils/const'
import { apiEndPoints } from '../../../utils/apis'
import axiosInstance from '../../../api/axiosInstance'

// 고객 상세 정보 요청 함수
export const fetchCustomerDetail = async (customerId: string) => {
  try {
    const { data } = await axiosInstance.get(apiEndPoints.customers.purchaseDetail(customerId))
    return data
  } catch (error) {
    console.error(`Error fetching customer detail for ID ${customerId}:`, error)
    throw new Error('Failed to fetch customer detail.')
  }
}

export const useCustomerDetail = (customerId: string) => {
  return useQuery({
    queryKey: ['customerDetail', customerId],
    queryFn: () => fetchCustomerDetail(customerId),
    enabled: !!customerId, // customerId가 있을 때만 쿼리 실행
  })
}
