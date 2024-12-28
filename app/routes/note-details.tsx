import { Link } from "react-router";

import noteDetailsStylesheet from "~/styles/note-details.css?url";
import { getStoredNotes } from "~/data/notes";

import type { Route } from "./+types/note-details";

export const meta: Route.MetaFunction = ({ data }) => [
  { title: data.note?.data.title ?? "Note not found" },
  { name: "description", content: data.note?.data.content ?? "Note not found" },
];

export const links: Route.LinksFunction = () => [
  {
    rel: "stylesheet",
    href: noteDetailsStylesheet,
  },
];

export const loader = async ({ params }: Route.LoaderArgs) => {
  const storedNotes = await getStoredNotes();

  const foundNote = storedNotes.find(({ id }) => id === params.noteId);

  return {
    note: foundNote,
  };
};

const NoteDetails = ({ loaderData }: Route.ComponentProps) => {
  const { note } = loaderData;

  if (!note) {
    return (
      <main className="error">
        <p>Could not find the note!</p>
      </main>
    );
  }

  return (
    <main id="note-details">
      <header>
        <nav>
          <Link to="/notes">Back to all notes</Link>
        </nav>
        <h1>{note.data.title}</h1>
      </header>
      <p id="note-details-content">{note.data.content}</p>
    </main>
  );
};

export default NoteDetails;
