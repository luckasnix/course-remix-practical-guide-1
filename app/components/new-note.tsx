export const NewNote = () => {
  return (
    <form method="post" id="note-form">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" aria-label="title" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows={5} aria-label="content" required />
      </p>
      <div className="form-actions">
        <button>Add Note</button>
      </div>
    </form>
  );
};
