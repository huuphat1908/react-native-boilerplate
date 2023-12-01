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
import { Controller, useFormContext } from 'react-hook-form'
import { FlatList, Modal, TextInput, TouchableOpacity } from 'react-native'

import { Body, Box, Center, ErrorText, HStack, Icon } from '@/components'
import { colors } from '@/constants'
import { useDisclose } from '@/hooks'
import { styleManager } from '@/libs'

import { dropdownStyles } from './Dropdown.style'

type DropdownProps = {
  name: string
  label: string
  data: Array<DropdownItem>
  readOnly?: boolean
  searchable?: boolean
  inputProps?: ComponentProps<typeof TextInput>
}

const Dropdown: FC<DropdownProps> = ({
  name,
  label,
  data,
  readOnly,
  searchable,
  inputProps,
}) => {
  const {
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext()
  const hasError = errors[name] ? true : false
  const { isOpen, open, close } = useDisclose()
  const { styles, theme } = styleManager.useStyles(dropdownStyles)
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
    setValue(name, item.value, {
      shouldValidate: true,
      shouldTouch: true,
    })
    close()
  }

  const renderItem = ({
    item,
  }: {
    item: DropdownItem
  }): ReactElement<any, any> => {
    const isActiveItem = item.value === getValues(name)

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
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Box>
          <TouchableOpacity
            style={{ zIndex: 1 }}
            disabled={readOnly}
            ref={DropdownButton}
            onPress={toggleDropdown}>
            {renderDropdown()}
            <HStack>
              <TextInput
                value={data.find(item => item.value === field.value)?.label}
                placeholder={label}
                onPressIn={toggleDropdown}
                pointerEvents="none"
                editable={false}
                placeholderTextColor={colors.gray}
                {...inputProps}
                style={[
                  theme.components.input,
                  readOnly && styles.readOnlyInput,
                  isOpen && styles.focusedInput,
                  hasError && styles.errorInput,
                  inputProps?.style,
                ]}
              />
              <Center style={styles.iconWrapper}>
                <Icon name="ChevronDown" size={20} color={theme.colors.black} />
              </Center>
            </HStack>
          </TouchableOpacity>
          <ErrorText name={name} errors={errors} />
        </Box>
      )}
    />
  )
}

Dropdown.defaultProps = {
  searchable: false,
}

export default Dropdown
