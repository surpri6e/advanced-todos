import React from 'react'
import { AlertContext } from '../context/alert/alertContext'

const Alert = () => {

  const context = React.useContext(AlertContext);

  React.useEffect(() => {
    if(context === undefined) {
      return () => {
        return null
      };
    } 
    if(!context.alert.visible) {
      return () => {
        return null
      };
    }

    const remove = setTimeout(() => {
      context.hide();
    }, 5000);

    return () => {
      clearTimeout(remove);
    }
  }, [context])

  if(context === undefined) {
    return null
  } 
  if(!context.alert.visible) {
    return null
  }



  return (
    <div className={`alert alert-${context.alert.type} alert-dismissible`}>
        <strong>{context.alert.title}.</strong> {context.alert.text}.
        <button onClick={context.hide} type="button" className="btn-close"></button>
    </div>
  )
}

export default Alert