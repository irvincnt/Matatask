import { FC, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, EntriesReducer } from './';

export interface EntriesState {
  entries: Entry[];
}

export interface Props {
  children: any;
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [{
    _id: '32456-6457-43566',
    description: 'pending - Aliquip mollit consectetur cillum ad elit officia excepteur qui velit nostrud id esse laboris occaecat.',
    status: 'pending',
    createAt: Date.now()
  },
  {
    _id: '32456-6457-43566',
    description: 'in-progress - Quis sint consequat culpa minim.',
    status: 'in-progress',
    createAt: Date.now()
  },
  {
    _id: '32456-6457-43566',
    description: 'in-progress - Laboris commodo aliquip fugiat et in culpa culpa pariatur dolore laboris culpa irure officia est.',
    status: 'in-progress',
    createAt: Date.now()
  },
  {
    _id: '32456-6457-43566',
    description: 'finished - Magna ullamco tempor minim nostrud nostrud consequat deserunt ea dolor.',
    status: 'finished',
    createAt: Date.now()
  }],
};

export const EntriesProvider:FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(EntriesReducer, Entries_INITIAL_STATE)
  return (
    <EntriesContext.Provider
      value={{
        ...state
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
