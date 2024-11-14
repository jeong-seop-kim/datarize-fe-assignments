import { createStore } from 'zustand/vanilla'
import { useStore } from 'zustand'

interface DateStore {
  from: Date | null
  to: Date | null
  setFrom: (date: Date | null) => void
  setTo: (date: Date | null) => void
}

//초기값 설정
const MIN_DATE = new Date('2024-07-01')
const MAX_DATE = new Date('2024-07-30')

//데이트 저장 스토어 생성
const dateStore = createStore<DateStore>((set) => ({
  from: MIN_DATE,
  to: MAX_DATE,
  setFrom: (date) => set({ from: date }),
  setTo: (date) => set({ to: date }),
}))

export const useDateStore = <T>(selector: (state: DateStore) => T) => useStore(dateStore, selector)
