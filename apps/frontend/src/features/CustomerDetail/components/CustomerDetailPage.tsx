import DashboardLayout from '../../../components/DashboardLayout'
import CustomerDetailHeader from './CustomerDetailHeader'
import CustomerListHeader from './CustomerDetailHeader'
import CustomerDetailInformation from './CustomerDetailInformation'

const CustomerDetailPage = () => {
  return (
    <DashboardLayout>
      {/* 헤더 */}
      <CustomerDetailHeader />
      {/* 상세 정보 */}
      <CustomerDetailInformation />
    </DashboardLayout>
  )
}

export default CustomerDetailPage
