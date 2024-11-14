import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { apiEndPoints } from '../../../utils/apis'
import axiosInstance from '../../../api/axiosInstance'

// 구매 빈도 요청 함수
export const fetchPurchaseFrequency = async (from: string, to: string) => {
  try {
    const { data } = await axiosInstance.get(apiEndPoints.purchaseFrequency, {
      params: { from, to },
    })
    return data
  } catch (error) {
    console.error(`Error fetching purchase frequency from ${from} to ${to}:`, error)
    throw new Error('Failed to fetch purchase frequency.')
  }
}

export const usePurchaseFrequency = (from: string, to: string) => {
  return useQuery({
    queryKey: ['purchaseFrequency', from, to],
    queryFn: () => fetchPurchaseFrequency(from, to),
  })
}
