export interface Entry {
  _id: number;
  description: string;
  createAt: number;
  status: EntryStatus;
}

export type EntryStatus = 'pending' | 'in-progress' | 'finished';