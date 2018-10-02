export function formatDeckFromTitle(title) {
  return {
    [title.split(' ').join('')]: {
      title: title,
      questions: []
    }
  }
}