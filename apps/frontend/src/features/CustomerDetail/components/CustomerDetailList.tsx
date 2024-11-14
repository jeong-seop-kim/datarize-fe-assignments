import { useLocation } from 'react-router-dom'
import { useCustomerDetail } from '../hooks/useCustomerDetail'
import useTranslation from '../../../hooks/useTranslation'
import { customer_detail } from '../../../utils/i18n/wording'

const CustomerDetailList = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const customerId = query.get('id') || ''

  // /api/customers 에서 유저 리스트 받아오기 query parameter : 오름차순, 이름 검색
  const { data, isLoading, isError } = useCustomerDetail(customerId)

  if (isLoading) return <p>{t(customer_detail.loading)}</p>
  if (isError) return <p>{t(customer_detail.error)}</p>

  return (
    <div className="">
      <table className="table-auto w-full text-white">
        <thead>
          <tr>
            <th>{t(customer_detail.image)}</th>
            <th>{t(customer_detail.name)}</th>
            <th>{t(customer_detail.price)} </th>
            <th>{t(customer_detail.count)}</th>
            <th>{t(customer_detail.date)}</th>
          </tr>
        </thead>
        <tbody className="">
          {data.map((purchase: any) => (
            <tr key={purchase?.id} className="hover:bg-gray-500">
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
    </div>
  )
}

export default CustomerDetailList
