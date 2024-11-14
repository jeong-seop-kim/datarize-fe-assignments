// src/features/CustomerList/hooks/useCustomerList.ts
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { apiEndPoints } from '../../../utils/apis'
import axiosInstance from '../../../api/axiosInstance'

// 고객 목록 요청 함수
export const fetchCustomers = async (sortBy: 'asc' | 'desc', name?: string) => {
  try {
    const { data } = await axiosInstance.get(apiEndPoints.customers.index, { params: { sortBy, name } })
    return data
  } catch (error) {
    console.error(`Error fetching customers with sortBy=${sortBy} and name=${name}:`, error)
    throw new Error('Failed to fetch customers.')
  }
}
export const useCustomerList = (sortBy: 'asc' | 'desc', name: string) => {
  return useQuery({
    queryKey: ['customers', sortBy, name],
    queryFn: () => fetchCustomers(sortBy, name),
  })
}
