import React, { FC, useCallback, useMemo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Pressable } from 'react-native'
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { scale, styleManager } from '@/libs'

import { stylesheet } from './Switch.style'

type Props = {
  name: string
  readOnly?: boolean
}

const SWITCH_BUTTON_PADDING = scale(2)
const BUTTON_WIDTH = scale(50)
const BUTTON_HEIGHT = scale(25)
const SWITCH_BUTTON_AREA = BUTTON_HEIGHT - SWITCH_BUTTON_PADDING
const InterpolateXInput = [0, 1]

const Switch: FC<Props> = ({ name, readOnly }) => {
  const { control, getValues } = useFormContext()
  const {
    styles,
    theme: { colors },
  } = styleManager.useStyles(stylesheet)

  const shareValue = useSharedValue(getValues(name) ? 1 : 0)

  const wrapperScale = useMemo(
    () => ({
      height: BUTTON_HEIGHT,
      width: BUTTON_WIDTH,
    }),
    [],
  )

  const switchScale = useMemo(
    () => ({
      height: SWITCH_BUTTON_AREA,
      width: SWITCH_BUTTON_AREA,
    }),
    [],
  )

  const handlePressSwitch = useCallback(() => {
    const x1 = 0.4
    const y1 = 0.0
    const x2 = 0.2
    const y2 = 1
    if (shareValue.value === 0) {
      shareValue.value = withTiming(1, {
        duration: 400,
        easing: Easing.bezier(x1, y1, x2, y2),
      })
    } else {
      shareValue.value = withTiming(0, {
        duration: 400,
        easing: Easing.bezier(x1, y1, x2, y2),
      })
    }
  }, [shareValue])

  const switchAreaStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            shareValue.value,
            InterpolateXInput,
            [0, BUTTON_WIDTH - SWITCH_BUTTON_AREA - 2 * SWITCH_BUTTON_PADDING],
            Extrapolate.CLAMP,
          ),
        },
      ],
      backgroundColor: interpolateColor(shareValue.value, InterpolateXInput, [
        colors.white,
        colors.white,
      ]),
    }
  })

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Pressable
          disabled={readOnly}
          onPress={() => {
            handlePressSwitch()
            onChange(!value)
          }}
          style={[
            styles.wrapper,
            readOnly && styles.wrapperReadOnly,
            wrapperScale,
            {
              backgroundColor: value ? colors.blue : colors.gray,
            },
          ]}>
          <Animated.View
            style={[
              styles.switchButton,
              {
                left: SWITCH_BUTTON_PADDING,
              },
              switchScale,
              switchAreaStyles,
            ]}
          />
        </Pressable>
      )}
    />
  )
}

Switch.defaultProps = {
  readOnly: false,
}

export default Switch
