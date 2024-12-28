import { Link } from "react-router";

import type { Note } from "~/data/notes";

export const NoteList = ({ notes }: { notes: Note[] }) => {
  return (
    <ul id="note-list">
      {notes.map((note, index) => (
        <li key={note.id} className="note">
          <Link to={`/notes/${note.id}`}>
            <article>
              <header>
                <ul className="note-meta">
                  <li>#{index + 1}</li>
                </ul>
                <h2>{note.data.title}</h2>
              </header>
              <p>{note.data.content}</p>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
};
