import { ComponentProps } from 'react'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { AlertDialog } from '@/components'

type AlertDialogProps = Omit<ComponentProps<typeof AlertDialog>, 'onClose'>

type State = {
  alertDialogProps: AlertDialogProps
}

type Actions = {
  showAlertDialog: (props: Omit<AlertDialogProps, 'isOpen'>) => void
  hideAlertDialog: () => void
}

const initialState: State = {
  alertDialogProps: {
    isOpen: false,
    title: '',
    message: '',
    confirmText: '',
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
  })),
)

export default useDialogManager
