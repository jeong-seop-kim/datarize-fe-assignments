import { Link } from 'react-router-dom'
import Button from '../../../components/Button'
import useTranslation from '../../../hooks/useTranslation'
import { dashboard_page } from '../../../utils/i18n/wording'

const DashboardPage = () => {
  const { t } = useTranslation()
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-10 rounded-xl shadow-lg ">
        <h1 className="text-3xl font-bold text-center mb-8">{t(dashboard_page.title)}</h1>

        <div className="grid grid-cols-2 gap-6 text-yellow">
          <Link to="/purchase/chart/frequency">
            <Button>
              <span className="text-white">{t(dashboard_page.label1)}</span>
            </Button>
          </Link>

          <Link to="/customer/list">
            <Button>
              <span className="text-white">{t(dashboard_page.label2)}</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
