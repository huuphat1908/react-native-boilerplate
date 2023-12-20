import { useCallback, useState } from 'react'

type ReturnType = [boolean, () => void, () => void, () => void]

const useDisclose = (initial = false): ReturnType => {
  const [isOpen, setIsOpen] = useState(initial)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen(state => !state), [])

  return [isOpen, open, close, toggle]
}

export default useDisclose
