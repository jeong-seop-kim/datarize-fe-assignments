import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { API_END_POINT_HOST_NAME } from '../../../utils/const'

const fetchPurchaseFrequency = async (from: string, to: string) => {
  const { data } = await axios.get(`${API_END_POINT_HOST_NAME}/api/purchase-frequency`, {
    params: { from, to },
  })

  return data
}

export const usePurchaseFrequency = (from: string, to: string) => {
  return useQuery({
    queryKey: ['purchaseFrequency', from, to],
    queryFn: () => fetchPurchaseFrequency(from, to),
  })
}
