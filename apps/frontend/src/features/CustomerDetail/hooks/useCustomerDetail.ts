// src/features/CustomerDetail/hooks/useCustomerDetail.ts
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchCustomerPurchases = async (customerId: string) => {
  const { data } = await axios.get(`/api/customer/${customerId}/purchases`)
  return data
}

export const useCustomerList = (customerId: string) => {
  return useQuery({
    queryKey: ['customerDetail', customerId],
    queryFn: () => fetchCustomerPurchases(customerId),
  })
}
