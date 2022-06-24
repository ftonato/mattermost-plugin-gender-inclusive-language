// eslint-disable-next-line
const {formatText, messageHtmlToComponent} = window.PostUtils;

export default class Utils {
  #forbidden = [];

  #error = {
    message: '',
  };

  constructor(
    forbiddenWords = [],
    errorMessage = '🌈  **Your phrase(s) would be more _inclusive_ if you substituted:** \n',
  ) {
    this.#forbidden = forbiddenWords;
    this.#error.message = errorMessage;
  }

  get error() {
    return this.#error;
  }

  get forbidden() {
    return this.#forbidden;
  }

  static getWords(post) {
    const regex = /[^a-z0-9]/gi;
    const words = post.split(regex);
    return words.filter(word => word.toLowerCase()).filter(word => word.length > 0);
  }

  findForbiddenWords(post) {
    const errors = [];
    const draft = Utils.getWords(post);

    const forbiddenWords = this.forbidden.entries();
    // eslint-disable-next-line
    for (const [_index, {words, suggestion, others}] of forbiddenWords) {
      let usedWord = null;

      words.some(word => {
        if (draft.includes(word.toLowerCase())) {
          usedWord = word;
          return true;
        }
        return false;
      });

      if (usedWord) {
        const message = `- **${usedWord}** for **${suggestion}**`;
        const suffix = others ? `, or even (**${others}**)` : '';
        errors.push(`${message}${suffix}`);
        usedWord = null;
      }
    }

    if (errors.length) {
      let {message} = this.error;
      message += errors.join('\n');
      message = messageHtmlToComponent(formatText(message));
      return {post: null, error: {message}};
    }

    return {post, error: null};
  }
}
