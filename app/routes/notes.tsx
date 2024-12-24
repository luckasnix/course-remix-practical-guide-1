import { redirect } from "react-router";

import { NewNote } from "~/components/new-note"
import { NoteList } from "~/components/note-list"
import newNoteStylesheet from "~/styles/new-note.css?url";
import noteListStylesheet from "~/styles/note-list.css?url";
import { type Note, storeNotes, getStoredNotes } from "~/data/notes";

import type { Route } from "./+types/notes";

export const meta = () => [
  { title: "Notes App" },
  { name: "description", content: "All your notes!" },
];

export const links: Route.LinksFunction = () => [
  {
    rel: "stylesheet",
    href: newNoteStylesheet,
  },
  {
    rel: "stylesheet",
    href: noteListStylesheet,
  },
];

export const loader = async () => {
  const storedNotes = await getStoredNotes();

  return storedNotes;
};

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  const note: Note = {
    id: crypto.randomUUID(),
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
    },
  };
  const storedNotes = await getStoredNotes();
  storeNotes(storedNotes.concat(note));

  return redirect("/notes");
};

const Notes = ({ loaderData }: Route.ComponentProps) => {
  return (
    <main>
      <NewNote />
      <NoteList notes={loaderData} />
    </main>
  );
};

export default Notes;
