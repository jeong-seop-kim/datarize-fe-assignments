import { API_END_POINT_HOST_NAME } from './const'

export const apiEndPoints = {
  purchaseFrequency: `${API_END_POINT_HOST_NAME}/api/purchase-frequency`,
  customers: {
    index: `${API_END_POINT_HOST_NAME}/api/customers`,
    purchaseDetail: (id: string) => `${API_END_POINT_HOST_NAME}/api/customers/${id}/purchases`,
  },
}
