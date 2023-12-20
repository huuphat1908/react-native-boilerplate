import { debounce, find } from 'lodash'
import React, {
  FC,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { FlatList, Modal, TextInputProps, TouchableOpacity } from 'react-native'

import { Body, Box, Input } from '@/components'
import { useDisclose } from '@/hooks'
import { styleManager } from '@/libs'

import { stylesheet } from './Dropdown.style'

type Props = {
  label: string
  value: string
  data: Array<DropdownItem>
  onSelect: (item: DropdownItem) => void
  searchable?: boolean
  noItemFoundText?: string
  //input props
  inputProps?: TextInputProps
  readOnly?: boolean
  hasError?: boolean
}

const Dropdown: FC<Props> = ({
  label,
  value,
  data,
  onSelect,
  searchable,
  noItemFoundText,
  inputProps,
  readOnly,
  hasError,
}) => {
  const { isOpen, open, close } = useDisclose()
  const {
    styles,
    theme: { colors },
  } = styleManager.useStyles(stylesheet)
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
    const itemsMatchKeyword = data.filter(item =>
      item.label.toLowerCase().startsWith(keyword.toLowerCase()),
    )

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
                <Input
                  style={styles.searchInput}
                  onChangeText={debouncedResults}
                  placeholder="Search"
                />
              </Box>
            )}
            <FlatList
              data={keyword ? itemsMatchKeyword : data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
            {keyword && itemsMatchKeyword.length === 0 && (
              <Box style={styles.itemWrapper}>
                <Body style={styles.noItemFoundText}>
                  {noItemFoundText || 'No item found'}
                </Body>
              </Box>
            )}
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
    <Box>
      <TouchableOpacity
        style={{ zIndex: 1 }}
        disabled={readOnly}
        ref={DropdownButton}
        onPress={toggleDropdown}>
        {renderDropdown()}
        <Input
          value={
            find(data, {
              value,
            })?.label
          }
          placeholder={label}
          pointerEvents="none"
          editable={false}
          rightIconName="ChevronDown"
          hasError={hasError}
          readOnly={readOnly}
          {...inputProps}
        />
      </TouchableOpacity>
    </Box>
  )
}

Dropdown.defaultProps = {
  searchable: false,
}

export default Dropdown
