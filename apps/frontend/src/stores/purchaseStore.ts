// src/stores/purchaseStore.ts
import { create } from 'zustand'

interface PurchaseState {
  purchases: any[]
}

const usePurchaseStore = create<PurchaseState>((set) => ({
  purchases: [],
}))

export default usePurchaseStore
