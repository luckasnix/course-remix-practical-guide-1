import { redirect } from "react-router";

import { NewNote } from "~/components/new-note"
import newNoteStylesheet from "~/styles/new-note.css?url";
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
];

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

  return redirect("/");
};

const Notes = () => {
  return (
    <main>
      <NewNote />
    </main>
  );
};

export default Notes;
