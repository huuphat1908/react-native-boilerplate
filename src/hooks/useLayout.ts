import { useCallback, useState } from 'react'
import { LayoutChangeEvent } from 'react-native'

const useLayout = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    setWidth(event.nativeEvent.layout.width)
    setHeight(event.nativeEvent.layout.height)
  }, [])

  return {
    width,
    height,
    handleLayout,
  }
}

export default useLayout
