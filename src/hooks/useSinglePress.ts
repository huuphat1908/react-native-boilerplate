import { useCallback, useState } from 'react'

const useSinglePress = (action: () => void, delay: number) => {
  const [isPressed, setIsPressed] = useState(false)

  const handlePress = useCallback(() => {
    let timeoutId: NodeJS.Timeout
    if (!isPressed) {
      setIsPressed(true)
      action()
      timeoutId = setTimeout(() => {
        setIsPressed(false)
      }, delay)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [action, delay, isPressed])

  return handlePress
}

export default useSinglePress
