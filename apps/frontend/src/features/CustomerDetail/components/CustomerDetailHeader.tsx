import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Button'
import { useCustomerStore } from '../../../stores/useCustomerStore'
import { purchase_frequency } from '../../../utils/i18n/wording'
import useTranslation from '../../../hooks/useTranslation'

const CustomerDetailHeader = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  // 뒤로 가기 함수
  const goBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <Button
          className="text-white hover:text-white hover:bg-gray-700 bg-black transition font-medium"
          onClick={goBack}
        >
          {t(purchase_frequency.back)}
        </Button>
        <h2 className="text-2xl font-semibold text-white">{t(purchase_frequency.title)}</h2>
      </div>
    </div>
  )
}

export default CustomerDetailHeader
