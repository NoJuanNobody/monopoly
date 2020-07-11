import { useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import rollDice from './actions'

/**
 * React hook for access to notifications. Returns
 * showSuccess, showError and showMessage
 * @returns {object} Notification actions
 */
export default function useGameSpaces() {
  const dispatch = useDispatch()
  return useMemo(() => {
    return bindActionCreators(rollDice, dispatch)
  }, [dispatch])
}


// todo: refactor file to componentize state for yeoman generator