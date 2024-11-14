import PurchaseFrequencyChart from './PurchaseFrequencyChart'
import PurcahseFrequencyHeader from './PurcahseFrequencyHeader'

const PurchaseFrequencyChartPage = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-black w-screen h-screen">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full border border-white">
        {/* 날짜 선택 & 헤더 */}
        <PurcahseFrequencyHeader />
        {/*  차트 */}
        <PurchaseFrequencyChart />
      </div>
    </div>
  )
}

export default PurchaseFrequencyChartPage
