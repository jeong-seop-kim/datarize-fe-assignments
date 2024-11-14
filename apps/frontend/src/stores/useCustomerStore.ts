import { createStore } from 'zustand/vanilla'
import { useStore } from 'zustand'

const CONST_STR = {
  ASC: 'asc',
  DESC: 'desc',
} as const

type TypeSearchTerm = (typeof CONST_STR)[keyof typeof CONST_STR]

interface CustomerStore {
  name: string
  sortBy: TypeSearchTerm
  setName: (name: string) => void
  setSortBy: (sortBy: TypeSearchTerm) => void
}

// Vanilla store 생성
const customerStore = createStore<CustomerStore>((set) => ({
  name: '',
  sortBy: CONST_STR.ASC,
  setName: (name) => set({ name }),
  setSortBy: (sortBy) => set({ sortBy }),
}))

export const useCustomerStore = <T>(selector: (state: CustomerStore) => T) => useStore(customerStore, selector)
