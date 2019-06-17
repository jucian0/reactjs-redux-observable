import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'

export function useAction(actions: any) {
  const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}