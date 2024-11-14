import { useState } from 'react'
import { useCustomerList } from '../hooks/useCustomerList'
import { useCustomerStore } from '../../../stores/useCustomerStore'
import { useNavigate } from 'react-router-dom'

const CustomerListTable = () => {
  const navigate = useNavigate()

  // Customer 스토어에서 상태 및 업데이트 함수 가져오기
  const name = useCustomerStore((state) => state.name)
  const sortBy = useCustomerStore((state) => state.sortBy)

  // /api/customers 에서 유저 리스트 받아오기 query parameter : 오름차순, 이름 검색
  const { data: customers, isLoading, isError } = useCustomerList(sortBy, name)

  // 고객 상세 페이지로 이동
  const handleClickCustomerRow = (id: string) => {
    navigate(`/customer-detail?id=${id}`)
  }
  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error fetching customers</p>

  return (
    <div className="">
      <table className="table-auto w-full text-white">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Count</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody className="">
          {customers.map((customer: any) => (
            <tr
              key={customer?.id}
              onClick={() => handleClickCustomerRow(customer?.id)}
              className="cursor-pointer hover:bg-gray-500"
            >
              <td className="px-6 py-1">{customer?.id || ''}</td>
              <td className="px-6 py-1">{customer?.name || ''}</td>
              <td className="px-6 py-1">{customer?.count || ''}</td>
              <td className="px-6 py-1">{customer?.totalAmount || ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerListTable
