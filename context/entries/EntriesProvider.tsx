import { FC, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { uuid } from '../../utils';
import { EntriesContext, EntriesReducer } from './';

export interface EntriesState {
  entries: Entry[];
}

export interface Props {
  children: any;
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [{
    _id: uuid(),
    description: 'pending - Aliquip mollit consectetur cillum ad elit officia excepteur qui velit nostrud id esse laboris occaecat.',
    status: 'pending',
    createAt: Date.now()
  },
  {
    _id: uuid(),
    description: 'in-progress - Quis sint consequat culpa minim.',
    status: 'in-progress',
    createAt: Date.now()
  },
  {
    _id: uuid(),
    description: 'in-progress - Laboris commodo aliquip fugiat et in culpa culpa pariatur dolore laboris culpa irure officia est.',
    status: 'in-progress',
    createAt: Date.now()
  },
  {
    _id: uuid(),
    description: 'in-progress - Laboris commodo aliquip fugiat et in culpa culpa pariatur dolore laboris culpa irure officia est.',
    status: 'in-progress',
    createAt: Date.now()
  },
  {
    _id: uuid(),
    description: 'finished - MagnsdfgasdrfASERa ullamco tempor minim nostrud nostrud consequat deserunt ea dolor.',
    status: 'finished',
    createAt: Date.now()
  }],
};

export const EntriesProvider:FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(EntriesReducer, Entries_INITIAL_STATE)

  const addNewEntry = ( description: string ) => {
    const newEntry:Entry = {
      _id: uuid(),
      description,
      status: 'pending',
      createAt: Date.now()
    }

    dispatch({type:'[Entries] - New entry', payload: newEntry });
  }

  const updatedEntry = (entry: Entry) => {
    dispatch({type: '[Entries] - Updated entry', payload: entry})
  }

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updatedEntry
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
