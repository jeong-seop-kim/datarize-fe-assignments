import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchPurchaseFrequency = async (from: string, to: string) => {
  const { data } = await axios.get('/api/purchase-frequency', { params: { from, to } })
  return data
}

export const usePurchaseFrequency = (from: string, to: string) => {
  return useQuery({
    queryKey: ['purchaseFrequency', from, to],
    queryFn: () => fetchPurchaseFrequency(from, to),
  })
}
