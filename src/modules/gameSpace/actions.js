import ROLLDICE from './actionTypes'


/**
 * Publish a notification. if `dismissAfter` is set, the notification will be
 * auto dismissed after the given period.
 * @param {Object} notif - Object containing
 * @param {Object} notif.kind - Kinda of notification (success, warning, failure)
 * @param {Object} notif.message - Notification message
 * @param {Object} notif.dismissAfter - Time after which to dismiss notification (default time set in constants)
 */

 
export default  function rollDice(notif) {
  const payload = {...notif}
  // Set default id to now if none provided
  if (!payload.id) {
    payload.id = Date.now()
  }
  return (dispatch) => {
    dispatch({ type: ROLLDICE, payload })
  }
}
