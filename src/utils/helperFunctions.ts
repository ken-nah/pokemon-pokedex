function toTitleCase(word: string) {
  return word.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export { toTitleCase };
