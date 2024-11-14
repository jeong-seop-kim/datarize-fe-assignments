// src/features/CustomerList/hooks/useCustomerList.ts
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { API_END_POINT_HOST_NAME } from '../../../utils/const'
import { apiEndPoints } from '../../../utils/apis'

const fetchCustomers = async (sortBy: 'asc' | 'desc', name?: string) => {
  const { data } = await axios.get(apiEndPoints.customers.index, { params: { sortBy, name } })
  return data
}

export const useCustomerList = (sortBy: 'asc' | 'desc', name: string) => {
  return useQuery({
    queryKey: ['customers', sortBy, name],
    queryFn: () => fetchCustomers(sortBy, name),
  })
}
