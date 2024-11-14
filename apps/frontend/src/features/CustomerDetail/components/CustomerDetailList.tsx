import { useLocation } from 'react-router-dom'
import { useCustomerDetail } from '../hooks/useCustomerDetail'

const CustomerDetailList = () => {
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const customerId = query.get('id') || ''

  // /api/customers 에서 유저 리스트 받아오기 query parameter : 오름차순, 이름 검색
  const { data, isLoading, isError } = useCustomerDetail(customerId)

  console.log(data, 'datadatadatadata')
  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error fetching customers</p>

  return (
    <div className="">
      <table className="table-auto w-full text-white">
        <thead>
          <tr>
            <th>이미지</th>
            <th>상품 이름</th>
            <th>상품 가격</th>
            <th>상품 갯수</th>
            <th>구매 날짜</th>
          </tr>
        </thead>
        <tbody className="">
          {data.map((purchase: any) => (
            <tr key={purchase?.id} className="hover:bg-gray-500">
              <td className="flex justify-center items-center">
                {' '}
                <img src={purchase?.imgSrc || ''} className="px-6 py-1 w-[300px] h-[200px]" />
              </td>
              <td className="px-6 py-1">{purchase?.product || ''}</td>
              <td className="px-6 py-1">{purchase?.price || ''}</td>
              <td className="px-6 py-1">{purchase?.quantity || ''}</td>
              <td className="px-6 py-1">{purchase?.date || ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerDetailList
