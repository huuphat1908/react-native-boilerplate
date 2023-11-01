import { create } from 'zustand'

interface BudgetState {
  budget: number
  increase: (by: number) => void
}

const useBudget = create<BudgetState>()(set => ({
  budget: 0,
  increase: by => set(state => ({ budget: state.budget + by })),
}))

export default useBudget
