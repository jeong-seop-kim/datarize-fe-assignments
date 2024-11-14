import { Link } from 'react-router-dom'

const DashboardPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-10 rounded-xl shadow-lg ">
        <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>

        <div className="grid grid-cols-2 gap-6 text-yellow">
          <Link
            to="/purchase-frequency"
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
          >
            <span className="text-yellow-200">구매 빈도 차트</span>
          </Link>

          <Link
            to="/customer-list"
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
          >
            <span className="text-yellow-200">고객 목록</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
