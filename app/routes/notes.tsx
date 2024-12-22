import { NewNote } from "~/components/new-note"
import newNoteStylesheet from "~/styles/new-note.css?url";

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

const Notes = () => {
  return (
    <main>
      <NewNote />
    </main>
  );
};

export default Notes;
