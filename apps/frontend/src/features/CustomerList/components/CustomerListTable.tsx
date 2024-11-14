import { useState } from 'react'
import { useCustomerList } from '../hooks/useCustomerList'
import { useCustomerStore } from '../../../stores/useCustomerStore'
import { useNavigate } from 'react-router-dom'
import useTranslation from '../../../hooks/useTranslation'
import { customer_list } from '../../../utils/i18n/wording'

interface Customer {
  id: number // 고객 ID
  name: string // 고객 이름
  count: number // 총 구매 횟수
  totalAmount: number // 총 구매 금액
}

const CustomerListTable = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  // 정렬 상태 관리
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  // Customer 스토어에서 상태 및 업데이트 함수 가져오기
  const name = useCustomerStore((state) => state.name)
  const sortBy = useCustomerStore((state) => state.sortBy)

  // /api/customers 에서 유저 리스트 받아오기 query parameter : 오름차순, 이름 검색
  const { data, isLoading, isError }: { data: Customer[] | undefined; isLoading: boolean; isError: boolean } =
    useCustomerList(sortBy, name)

  // 고객 상세 페이지로 이동
  const handleClickCustomerRow = (id: string) => {
    navigate(`/customer/detail?id=${id}`)
  }

  // 정렬 함수
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      // 같은 열을 클릭하면 방향을 반전
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      // 다른 열을 클릭하면 오름차순으로 정렬
      setSortColumn(column)
      setSortOrder('asc')
    }
  }

  // 데이터를 정렬하는 로직
  const sortedData = [...(data || [])].sort((a: any, b: any) => {
    if (!sortColumn) return 0

    const valueA = a[sortColumn]
    const valueB = b[sortColumn]

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return sortOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA)
    }

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return sortOrder === 'asc' ? valueA - valueB : valueB - valueA
    }

    return 0
  })

  if (isLoading) return <p className="text-white">{t(customer_list.loading)}</p>
  if (isError) return <p className="text-white">{t(customer_list.error)}</p>

  return (
    <section className="">
      <table className="table-auto w-full text-white">
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>{t(customer_list.id)}↑</th>
            <th onClick={() => handleSort('name')}>{t(customer_list.name)}↑</th>
            <th onClick={() => handleSort('count')}>{t(customer_list.count)}↑</th>
            <th onClick={() => handleSort('totalAmount')}>{t(customer_list.totalAmount)}↑</th>
          </tr>
        </thead>
        <tbody className="">
          {sortedData.map((customer: any) => (
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
    </section>
  )
}

export default CustomerListTable
