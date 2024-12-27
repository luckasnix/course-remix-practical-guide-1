import { Form, useNavigation, useActionData } from "react-router";

import type { NoteData } from "~/data/notes";

export const NewNote = () => {
  const navigation = useNavigation();
  const actionData = useActionData<Partial<Record<keyof NoteData, string>>>();

  return (
    <Form method="post" id="note-form">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" aria-label="title" required />
        {actionData?.title && <small className="error-message">{actionData.title}</small>}
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows={5} aria-label="content" required />
        {actionData?.content && <small className="error-message">{actionData.content}</small>}
      </p>
      <div className="form-actions">
        <button type="submit" disabled={navigation.state === "submitting"}>Add Note</button>
      </div>
    </Form>
  );
};
