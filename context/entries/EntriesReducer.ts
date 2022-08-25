import { Entry } from '../../interfaces'
import {EntriesState} from './'

type EntriesActionType =
| { type: '[Entries] - New entry', payload: Entry}


export const EntriesReducer = (state:EntriesState, action:EntriesActionType ):EntriesState => {
  switch (action.type) {
    case '[Entries] - New entry':
      return {
        ...state,
        entries: [...state.entries, action.payload]
      }
    default:
      return state
  }
}