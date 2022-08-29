import { Entry } from '../../interfaces'
import {EntriesState} from './'

type EntriesActionType =
| { type: '[Entries] - New entry', payload: Entry}
| { type: '[Entries] - Updated entry', payload: Entry}


export const EntriesReducer = (state:EntriesState, action:EntriesActionType ):EntriesState => {
  switch (action.type) {
    case '[Entries] - New entry':
      return {
        ...state,
        entries: [...state.entries, action.payload]
      }
    case '[Entries] - Updated entry':
      return {
        ...state,
        entries: state.entries.map(entry => {
          if(entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }
          return entry
        })
      }
    default:
      return state
  }
}