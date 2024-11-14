import React, { useState } from 'react'
import { useCustomerList } from '../hooks/useCustomerList'
import CustomerListHeader from './CustomerListHeader'
import CustomerListTable from './CustomerListTable'
import DashboardLayout from '../../../components/DashboardLayout'

const CustomerList = () => {
  return (
    <DashboardLayout>
      {/* 헤더 */}
      <CustomerListHeader />
      {/*  차트 */}
      <CustomerListTable />
    </DashboardLayout>
  )
}

export default CustomerList
