// Get Note
// https://developer.adobelaunch.com/api/reference/1.0/notes/fetch/
export function getNote(noteId) {
  return this.get(`/notes/${noteId}`);
}
