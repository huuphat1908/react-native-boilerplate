import React, { FC } from 'react'
import { TouchableWithoutFeedback } from 'react-native'

import { Center, Icon } from '@/components'
import { styleManager } from '@/libs'

import { stylesheet } from './Checkbox.style'

type Props = {
  value: boolean
  onChange: (value: boolean) => void
  readOnly?: boolean
}

const Checkbox: FC<Props> = ({ value, onChange, readOnly }) => {
  const {
    styles,
    theme: { colors },
  } = styleManager.useStyles(stylesheet)

  return (
    <TouchableWithoutFeedback
      disabled={readOnly}
      onPress={() => onChange(!value)}>
      <Center
        style={[
          styles.wrapper,
          readOnly && styles.wrapperReadOnly,
          value && styles.wrapperChecked,
        ]}>
        {value && (
          <Icon name="Check" size={20} color={colors.white} strokeWidth={3} />
        )}
      </Center>
    </TouchableWithoutFeedback>
  )
}

Checkbox.defaultProps = {
  readOnly: false,
}

export default Checkbox
