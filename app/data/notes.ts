import fs from 'node:fs/promises';

export type NoteData = {
  title: string;
  content: string;
};

export type Note = {
  id: string;
  data: NoteData;
};

export const getStoredNotes = async () => {
  const rawFileContent = await fs.readFile('notes.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedNotes = (data.notes ?? []) as Note[];

  return storedNotes;
};

export const storeNotes = (notes: Note[]) => {
  return fs.writeFile('notes.json', JSON.stringify({ notes: notes || [] }));
};
