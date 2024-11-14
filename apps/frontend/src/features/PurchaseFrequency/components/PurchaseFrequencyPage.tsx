import PurchaseFrequencyChart from './PurchaseFrequencyChart'
import PurcahseFrequencyHeader from './PurcahseFrequencyHeader'
import DashboardLayout from '../../../components/DashboardLayout'

const PurchaseFrequencyChartPage = () => {
  return (
    <DashboardLayout>
      {/* 날짜 선택 & 헤더 */}
      <PurcahseFrequencyHeader />
      {/*  차트 */}
      <PurchaseFrequencyChart />
    </DashboardLayout>
  )
}

export default PurchaseFrequencyChartPage
