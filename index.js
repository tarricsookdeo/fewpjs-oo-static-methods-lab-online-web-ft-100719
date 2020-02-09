class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-.' ]+/g, "");
  }

  static titleize(string) {
    const exceptions = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from"
    ];
    return string
      .split(" ")
      .map(word => {
        if (
          !exceptions.some(exception => exception === word) ||
          word === string.charAt(0)
        )
          return this.capitalize(word);
        else return word;
      })
      .join(" ");
  }
}
