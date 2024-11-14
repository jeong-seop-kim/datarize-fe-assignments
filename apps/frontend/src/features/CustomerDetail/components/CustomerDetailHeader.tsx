import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Button'
import { customer_detail, purchase_frequency } from '../../../utils/i18n/wording'
import useTranslation from '../../../hooks/useTranslation'

const CustomerDetailHeader = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

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
        <h2 className="text-2xl font-semibold text-white">{t(customer_detail.title)}</h2>
      </div>
    </header>
  )
}

export default CustomerDetailHeader
