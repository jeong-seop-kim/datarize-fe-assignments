// src/features/CustomerList/hooks/useCustomerList.ts
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchCustomers = async (sortBy: 'asc' | 'desc', name?: string) => {
  const { data } = await axios.get('/api/customers', { params: { sortBy, name } })
  return data
}

export const useCustomerList = (sortBy: 'asc' | 'desc', name: string) => {
  return useQuery({
    queryKey: ['customers', sortBy, name],
    queryFn: () => fetchCustomers(sortBy, name),
  })
}
