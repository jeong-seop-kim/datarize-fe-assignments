import DashboardLayout from '../../../components/DashboardLayout'
import CustomerDetailHeader from './CustomerDetailHeader'
import CustomerListHeader from './CustomerDetailHeader'
import CustomerDetailList from './CustomerDetailList'

const CustomerDetailPage = () => {
  return (
    <DashboardLayout>
      {/* 헤더 */}
      <CustomerDetailHeader />
      {/* 구매 상세 목록 */}
      <CustomerDetailList />
    </DashboardLayout>
  )
}

export default CustomerDetailPage
