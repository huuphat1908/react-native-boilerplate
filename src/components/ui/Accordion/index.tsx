import React, { FC, ReactNode } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { colors } from '@/constants'
import { useDisclose } from '@/hooks'
import { styleManager } from '@/libs'

import HStack from '../../layouts/HStack'
import VStack from '../../layouts/VStack'
import Icon from '../Icon'
import { accordionStyles } from './Accordion.style'

type AccordionProps = {
  title: string
  children: ReactNode
}

const Accordion: FC<AccordionProps> = ({ title, children }) => {
  const { isOpen, toggle } = useDisclose()
  const { styles } = styleManager.useStyles(accordionStyles)

  return (
    <VStack>
      <TouchableOpacity onPress={toggle}>
        <HStack style={styles.container}>
          <Icon
            name={isOpen ? 'ChevronDown' : 'ChevronRight'}
            size={24}
            color={colors.blue}
          />
          <Text style={styles.title}>{title}</Text>
        </HStack>
      </TouchableOpacity>
      {isOpen && children}
    </VStack>
  )
}

export default Accordion
