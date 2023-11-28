import { debounce } from 'lodash'
import React, {
  ComponentProps,
  FC,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { FlatList, Modal, TextInput, TouchableOpacity } from 'react-native'

import { Body, Box } from '@/components'
import { colors } from '@/constants'
import { useDisclose } from '@/hooks'
import { styleManager } from '@/libs'

import { bareDropdownStyles } from './BareDropdown.style'

type BareDropdownProps = {
  label: string
  value: string
  data: Array<DropdownItem>
  onSelect: (item: DropdownItem) => void
  searchable?: boolean
  inputProps?: ComponentProps<typeof TextInput>
}

const BareDropdown: FC<BareDropdownProps> = ({
  label,
  value,
  data,
  onSelect,
  searchable,
  inputProps,
}) => {
  const { isOpen, open, close } = useDisclose()
  const { styles, theme } = styleManager.useStyles(bareDropdownStyles)
  const [keyword, setKeyword] = useState('')
  const [dropdownTop, setDropdownTop] = useState(0)
  const [dropdownLeft, setDropdownLeft] = useState(0)
  const [dropdownWidth, setDropdownWidth] = useState(0)
  const DropdownButton = useRef<TouchableOpacity>(null)

  const openDropdown = () => {
    DropdownButton.current?.measure((fx, fy, w, h, px, py) => {
      setDropdownLeft(px)
      setDropdownWidth(w)
      setDropdownTop(py + h)
    })
    open()
  }

  const toggleDropdown = () => {
    if (isOpen) {
      setKeyword('')
      close()
    } else {
      openDropdown()
    }
  }

  const onItemPress = (item: DropdownItem) => {
    setKeyword('')
    onSelect(item)
    close()
  }

  const renderItem = ({
    item,
  }: {
    item: DropdownItem
  }): ReactElement<any, any> => {
    const isActiveItem = item.value === value

    return (
      <TouchableOpacity onPress={() => onItemPress(item)}>
        <Box
          style={[
            styles.itemWrapper,
            {
              backgroundColor: isActiveItem ? colors.lightGray : colors.white,
            },
          ]}>
          <Body numberOfLines={1} ellipsizeMode="tail">
            {item.label}
          </Body>
        </Box>
      </TouchableOpacity>
    )
  }

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={isOpen} transparent animationType="none">
        <TouchableOpacity
          style={styles.dropdownContainer}
          activeOpacity={1}
          onPress={() => {
            setKeyword('')
            close()
          }}>
          <Box
            style={[
              styles.dropdownWrapper,
              {
                width: dropdownWidth,
                top: dropdownTop,
                left: dropdownLeft,
              },
            ]}>
            {searchable && (
              <Box style={styles.searchWrapper}>
                <TextInput
                  style={styles.searchInput}
                  onChangeText={debouncedResults}
                  placeholder="Search"
                  placeholderTextColor={colors.gray}
                />
              </Box>
            )}
            <FlatList
              data={
                keyword
                  ? data.filter(item =>
                      item.label
                        .toLowerCase()
                        .startsWith(keyword.toLowerCase()),
                    )
                  : data
              }
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </Box>
        </TouchableOpacity>
      </Modal>
    )
  }

  const debouncedResults = useMemo(() => {
    return debounce(text => setKeyword(text), 300)
  }, [])

  useEffect(() => {
    return () => {
      debouncedResults.cancel()
    }
  })

  return (
    <TouchableOpacity
      style={{ zIndex: 1 }}
      ref={DropdownButton}
      onPress={toggleDropdown}>
      {renderDropdown()}
      <TextInput
        value={data.find(item => item.value === value)?.label}
        placeholder={label}
        onPressIn={toggleDropdown}
        pointerEvents="none"
        editable={false}
        placeholderTextColor={colors.gray}
        {...inputProps}
        style={[theme.components.input, inputProps?.style]}
      />
    </TouchableOpacity>
  )
}

BareDropdown.defaultProps = {
  searchable: false,
}

export default BareDropdown
