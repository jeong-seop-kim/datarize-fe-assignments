import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Button'
import { useCustomerStore } from '../../../stores/useCustomerStore'
import { purchase_frequency } from '../../../utils/i18n/wording'
import useTranslation from '../../../hooks/useTranslation'
import { useEffect, useState } from 'react'

const CustomerListHeader = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  // Zustand 스토어에서 상태 및 업데이트 함수 가져오기
  const [searchTerm, setSearchTerm] = useState<string>('')

  const sortBy = useCustomerStore((state) => state.sortBy)
  const setName = useCustomerStore((state) => state.setName)
  const setSortBy = useCustomerStore((state) => state.setSortBy)

  // 뒤로 가기 함수
  const goBack = () => {
    navigate(-1)
  }

  //불필요한 네트워크 요청을 막는 debounce 처리
  useEffect(() => {
    // 타이머 설정
    const timer = setTimeout(() => {
      setName(searchTerm) // 디바운스 후 상태 업데이트
    }, 500)

    // 클린업: searchTerm이 변경될 때 이전 타이머를 클리어
    return () => clearTimeout(timer)
  }, [searchTerm, setName])

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <Button
          className="text-white hover:text-white hover:bg-gray-700 bg-black transition font-medium"
          onClick={goBack}
        >
          {t(purchase_frequency.back)}
        </Button>
        <h2 className="text-2xl font-semibold text-white">고객 목록</h2>
      </div>
      <div className="mb-4 flex gap-[8px]">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name"
          className="border p-2 rounded"
        />
        <select
          className="border p-2 rounded h-[42px]"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'asc' | 'desc')}
        >
          <option value="asc">Sort by Amount: Ascending</option>
          <option value="desc">Sort by Amount: Descending</option>
        </select>
      </div>
    </div>
  )
}

export default CustomerListHeader
