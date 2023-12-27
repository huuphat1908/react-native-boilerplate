import { ComponentProps } from 'react'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import {
  AlertDialog,
  ConfirmationDialog,
  InputDialog,
  Toast,
} from '@/components'

type AlertDialogProps = Omit<ComponentProps<typeof AlertDialog>, 'onClose'>
type ConfirmationDialogProps = Omit<
  ComponentProps<typeof ConfirmationDialog>,
  'onClose'
>
type InputDialogProps = Omit<ComponentProps<typeof InputDialog>, 'onClose'>
type ToastProps = Omit<ComponentProps<typeof Toast>, 'onClose'>

type State = {
  alertDialogProps: AlertDialogProps
  confirmationDialogProps: ConfirmationDialogProps
  inputDialogProps: InputDialogProps
  toastProps: ToastProps
}

type Actions = {
  showAlertDialog: (props: Omit<AlertDialogProps, 'isOpen'>) => void
  hideAlertDialog: () => void

  showConfirmationDialog: (
    props: Omit<ConfirmationDialogProps, 'isOpen'>,
  ) => void
  hideConfirmationDialog: () => void

  showInputDialog: (props: Omit<InputDialogProps, 'isOpen'>) => void
  hideInputDialog: () => void

  showToast: (props: Omit<ToastProps, 'isOpen'>) => void
  hideToast: () => void
}

const initialState: State = {
  alertDialogProps: {
    isOpen: false,
    title: '',
    message: '',
    confirmText: '',
  },
  confirmationDialogProps: {
    isOpen: false,
    title: '',
    message: '',
    confirmText: '',
    cancelText: '',
    onConfirm: () => {},
  },
  inputDialogProps: {
    isOpen: false,
    title: '',
    message: '',
    confirmText: '',
    cancelText: '',
    placeholderInput: '',
    onConfirm: () => {},
  },
  toastProps: {
    isOpen: false,
    message: '',
  },
}

const useDialogManager = create<State & Actions>()(
  immer(set => ({
    ...initialState,
    showAlertDialog: props =>
      set(() => ({
        alertDialogProps: {
          ...initialState.alertDialogProps,
          ...props,
          isOpen: true,
        },
      })),
    hideAlertDialog: () =>
      set(state => {
        state.alertDialogProps.isOpen = false
      }),

    showConfirmationDialog: props =>
      set(() => ({
        confirmationDialogProps: {
          ...initialState.confirmationDialogProps,
          ...props,
          isOpen: true,
        },
      })),
    hideConfirmationDialog: () =>
      set(state => {
        state.confirmationDialogProps.isOpen = false
      }),

    showInputDialog: props =>
      set(() => ({
        inputDialogProps: {
          ...initialState.inputDialogProps,
          ...props,
          isOpen: true,
        },
      })),
    hideInputDialog: () =>
      set(state => {
        state.inputDialogProps.isOpen = false
      }),

    showToast: props =>
      set(() => ({
        toastProps: {
          ...initialState.toastProps,
          ...props,
          isOpen: true,
        },
      })),
    hideToast: () =>
      set(state => {
        state.toastProps.isOpen = false
      }),
  })),
)

export default useDialogManager
