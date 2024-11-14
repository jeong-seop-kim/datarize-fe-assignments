import 'react-datepicker/dist/react-datepicker.css'
import { ResponsiveBar } from '@nivo/bar'
import { usePurchaseFrequency } from '../hooks/usePurchaseFrequency'
import { purchase_frequency } from '../../../utils/i18n/wording'
import useTranslation from '../../../hooks/useTranslation'
import { useDateStore } from '../../../stores/useDateStore'

interface PurchaseFrequency {
  range: string // 가격 범위 (예: "0 - 20000")
  count: number // 해당 범위에서의 구매 빈도
}

const PurchaseFrequencyChart = () => {
  const { t } = useTranslation()

  // Zustand를 통해 날짜 상태 가져오기
  const fromDate = useDateStore((state) => state.from)
  const toDate = useDateStore((state) => state.to)

  //usePurchaseFrequency훅을 통해서 axios HTTP 요청 -> react-qeury 연동
  const {
    data,
    isLoading,
    isError,
    error,
  }: {
    data: PurchaseFrequency[] | any
    isError: boolean
    isLoading: boolean
    error: { message: string | null } | null
  } = usePurchaseFrequency(fromDate ? fromDate.toISOString() : '', toDate ? toDate.toISOString() : '')

  //로딩 및 에러 처리
  if (isError)
    return (
      <p className="flex items-center justify-center min-h-[448px]">
        {t(purchase_frequency.error)} {error?.message}
      </p>
    )
  if (isLoading)
    return <p className="flex items-center justify-center min-h-[448px]">{t(purchase_frequency.loading)}</p>

  return (
    <section className="p-6 bg-white rounded-lg shadow-lg w-full">
      <div style={{ height: '400px' }}>
        <ResponsiveBar
          data={data || []} // 데이터가 존재하는 경우 전달
          keys={['count']}
          indexBy="range"
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'nivo' }}
          borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: t(purchase_frequency.price),
            legendPosition: 'middle',
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: t(purchase_frequency.frequency),
            legendPosition: 'middle',
            legendOffset: -40,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'top-left',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          animate={true}
        />
      </div>
    </section>
  )
}

export default PurchaseFrequencyChart
