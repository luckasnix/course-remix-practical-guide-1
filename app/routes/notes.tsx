import { redirect } from "react-router";

import { NewNote } from "~/components/new-note";
import { NoteList } from "~/components/note-list";
import newNoteStylesheet from "~/styles/new-note.css?url";
import noteListStylesheet from "~/styles/note-list.css?url";
import { type Note, type NoteData, storeNotes, getStoredNotes } from "~/data/notes";

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
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const errors: Partial<Record<keyof NoteData, string>> = {};
  if (title.length < 5) {
    errors.title = "O título da nota deve ter ao menos 5 caracteres.";
  }
  if (content.length < 10) {
    errors.content = "O conteúdo da nota deve ter ao menos 10 caracteres.";
  }
  if (Object.keys(errors).length > 0) {
    return errors;
  }
  const note: Note = {
    id: crypto.randomUUID(),
    data: {
      title,
      content,
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
