import { ComponentProps } from 'react'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { AlertDialog, Toast } from '@/components'

type AlertDialogProps = Omit<ComponentProps<typeof AlertDialog>, 'onClose'>
type ToastProps = Omit<ComponentProps<typeof Toast>, 'onClose'>

type State = {
  alertDialogProps: AlertDialogProps
  toastProps: ToastProps
}

type Actions = {
  showAlertDialog: (props: Omit<AlertDialogProps, 'isOpen'>) => void
  hideAlertDialog: () => void

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
          ...props,
          isOpen: true,
        },
      })),
    hideAlertDialog: () =>
      set(state => {
        state.alertDialogProps.isOpen = false
      }),

    showToast: props =>
      set(() => ({
        toastProps: {
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
