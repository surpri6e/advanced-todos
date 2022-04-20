import React from 'react'
import { TAlertType } from '../../types/IAlert';
import { AlertContext } from './alertContext'
import { alertReducer } from './alertReducer'

interface AlertStateProps {
  children: React.ReactNode | React.ReactChild;
}

const AlertState: React.FC<AlertStateProps> = ({children}) => {

  const [state, dispatch] = React.useReducer(alertReducer, {text: '', title: '', type: 'success', visible: false});

  const show = (text: string, type: TAlertType, ) => {
    dispatch({
      type: 'SHOW_ALERT',
      payload: {
        title: type.charAt(0).toUpperCase() + type.slice(1),
        type,
        text,
        visible: false,
      }
    })
  }

  const hide = () => dispatch({type: 'HIDE_ALERT'})


  return (
    <AlertContext.Provider value={{alert: state, show, hide}}>
        {children}
    </AlertContext.Provider>
  )
}

export default AlertState