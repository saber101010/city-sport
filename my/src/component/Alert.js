
import { useSelector } from 'react-redux'



function  Alert() {
    const alerts=useSelector(state=>state.alertReducer)
    return(
        <>
        {
           
            alerts.map(alert=><div className={`alert alert-${alert.alertType}`} role="alert">
                {alert.msg}
                </div>)
        }
        </>
    )
}

export default Alert