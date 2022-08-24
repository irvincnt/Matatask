import {EntriesState} from './'

type EntriesActionType =
| { type: '[Entries] - ActionName'}

export const EntriesReducer = (state:EntriesState, action:EntriesActionType ):EntriesState => {
  switch (action.type) {
    // case value:
      
    //   break;
  
    default:
      return state
  }
}