import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import PurchaseFrequencyChart from './PurchaseFrequencyChart'
import { useNavigate } from 'react-router-dom'
import useTranslation from '../../../hooks/useTranslation'
import { purchase_frequency } from '../../../utils/i18n/wording'
import Button from '../../../components/Button'
import { useDateStore } from '../../../stores/useDateStore'

const PurcahseFrequencyHeader = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  // 날짜 선택 범위 설정
  const MIN_DATE = '2024-07-01'
  const MAX_DATE = '2024-07-30'

  // Zustand를 통해 날짜 상태 가져오기
  const from = useDateStore((state) => state.from)
  const to = useDateStore((state) => state.to)
  const setFrom = useDateStore((state) => state.setFrom)
  const setTo = useDateStore((state) => state.setTo)

  // 뒤로 가기 함수
  const goBack = () => {
    navigate(-1)
  }

  return (
    <header>
      <div className="flex items-center justify-between mb-6">
        <Button
          className="text-white hover:text-white hover:bg-gray-700 bg-black transition font-medium"
          onClick={goBack}
        >
          {t(purchase_frequency.back)}
        </Button>
        <h2 className="text-2xl font-semibold text-white">{t(purchase_frequency.title)}</h2>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <label htmlFor="start-date" className="block text-sm font-medium text-white mb-1">
            {t(purchase_frequency.start_date)}
          </label>
          <DatePicker
            id="start-date"
            minDate={new Date(MIN_DATE)}
            maxDate={new Date(MAX_DATE)}
            selected={from}
            onChange={(date) => setFrom(date)}
            className="cursor-pointer border border-white p-2 rounded-md w-full bg-gray-800 text-white focus:border-white focus:ring-0 focus:ring-white"
            placeholderText="YYYY-MM-DD"
          />
        </div>
        <div>
          <label htmlFor="end-date" className="block text-sm font-medium text-white mb-1">
            {t(purchase_frequency.end_date)}
          </label>
          <DatePicker
            id="end-date"
            minDate={new Date(MIN_DATE)}
            maxDate={new Date(MAX_DATE)}
            selected={to}
            onChange={(date) => setTo(date)}
            className="cursor-pointer border border-white p-2 rounded-md w-full bg-gray-800 text-white focus:border-white focus:ring focus:ring-white"
            placeholderText="YYYY-MM-DD"
          />
        </div>
      </div>
    </header>
  )
}

export default PurcahseFrequencyHeader
