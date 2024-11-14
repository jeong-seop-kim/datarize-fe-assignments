import { useLocation } from 'react-router-dom'
import { useCustomerDetail } from '../hooks/useCustomerDetail'
import useTranslation from '../../../hooks/useTranslation'
import { customer_detail } from '../../../utils/i18n/wording'
import { useState } from 'react'

interface Purchase {
  date: string // ISO 형식 날짜 문자열
  quantity: number // 구매 수량
  product: string // 제품 이름
  price: number // 제품 가격
  imgSrc: string // 이미지 URL
}

const CustomerDetailList = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const customerId = query.get('id') || ''

  // /api/customers 에서 유저 리스트 받아오기 query parameter : 오름차순, 이름 검색
  const { data, isLoading, isError }: { data: Purchase[] | undefined; isLoading: boolean; isError: boolean } =
    useCustomerDetail(customerId)

  // 정렬 상태 관리
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

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

  if (isLoading) return <p className="text-white">{t(customer_detail.loading)}</p>
  if (isError) return <p className="text-white">{t(customer_detail.error)}</p>

  return (
    <section className="">
      <table className="table-auto w-full text-white">
        <thead>
          <tr className="cursor-pointer">
            <th>{t(customer_detail.image)}</th>
            <th onClick={() => handleSort('product')}>{t(customer_detail.name)}↑</th>
            <th onClick={() => handleSort('price')}>{t(customer_detail.price)}↑</th>
            <th onClick={() => handleSort('quantity')}>{t(customer_detail.count)}↑</th>
            <th onClick={() => handleSort('date')}>{t(customer_detail.date)}↑</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((purchase: Purchase, index) => (
            <tr key={index} className="hover:bg-gray-500">
              <td className="flex justify-center items-center">
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
    </section>
  )
}

export default CustomerDetailList
