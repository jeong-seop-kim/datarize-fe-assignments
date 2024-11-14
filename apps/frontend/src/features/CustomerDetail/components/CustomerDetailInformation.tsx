import { useLocation } from 'react-router-dom'
import { useCustomerDetail } from '../hooks/useCustomerDetail'

const CustomerDetailInformation = () => {
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const customerId = query.get('id') || ''

  // /api/customers 에서 유저 리스트 받아오기 query parameter : 오름차순, 이름 검색
  const { data, isLoading, isError } = useCustomerDetail('6')
  console.log(data, 'data')
  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error fetching customers</p>

  return <div className=""></div>
}

export default CustomerDetailInformation
