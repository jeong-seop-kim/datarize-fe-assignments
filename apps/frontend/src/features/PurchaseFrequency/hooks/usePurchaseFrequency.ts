import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchPurchaseFrequency = async (from: string, to: string) => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/purchase-frequency`, {
    params: { from, to },
  })
  console.log(data, 'AXIOS : response')
  return data
}

export const usePurchaseFrequency = (from: string, to: string) => {
  return useQuery({
    queryKey: ['purchaseFrequency', from, to],
    queryFn: () => fetchPurchaseFrequency(from, to),
  })
}
