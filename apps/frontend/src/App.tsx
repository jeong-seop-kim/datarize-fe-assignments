import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PurchaseFrequencyPage from './features/PurchaseFrequency/components/PurchaseFrequencyPage'
import CustomerListPage from './features/CustomerList/components/CustomerListPage'
import CustomerDetailPage from './features/CustomerDetail/components/CustomerDetailPage'
import Dashboard from './features/Dashboard/components/DashboardPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
<<<<<<< Updated upstream
        <Route path="/purchase/chart/frequency" element={<PurchaseFrequencyPage />} />
        <Route path="/customer/list" element={<CustomerListPage />} />
        <Route path="/customer/detail" element={<CustomerDetailPage />} />
=======
        <Route path="/purchase-frequency" element={<PurchaseFrequencyPage />} />
        <Route path="/customer-list" element={<CustomerListPage />} />
        <Route path="/customer-detail" element={<CustomerDetailPage />} />
>>>>>>> Stashed changes
      </Routes>
    </Router>
  )
}

export default App
