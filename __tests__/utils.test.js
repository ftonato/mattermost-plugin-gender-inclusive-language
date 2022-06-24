import Utils from '../src/utils';

describe('Utils class', () => {
  let utils;

  test('it should return an object with the original post when no forbidden words are not provided', () => {
    utils = new Utils();
    const post = 'hello world';

    expect(utils.findForbiddenWords(post)).toMatchObject({post, error: null});
  });

  test('it should return a list of used words filtered by valid characters', () => {
    const post = `Hello, do you know some forbidden words?
      Take a look in our list: (ad-man), black-list, whitelist, {---}, hello_world, FIANCÉE, bOy.!
      [BYe]
      `;

    const words = Utils.getWords(post);
    const expected = [
      'Hello',
      'do',
      'you',
      'know',
      'some',
      'forbidden',
      'words',
      'Take',
      'look',
      'in',
      'our',
      'list',
      'ad-man',
      'black-list',
      'whitelist',
      '---',
      'hello_world',
      'FIANCÉE',
      'bOy',
      'BYe',
    ];

    expect(words).toHaveLength(expected.length);
    expect(words.sort()).toEqual(expected.sort());
  });

  test('it should return an object with the original post when no forbidden words are present', () => {
    utils = new Utils([
      {
        words: ['ad-man', 'ad-woman'],
        suggestion: 'ad-person',
        others: 'advertising executive, promoter',
      },
    ]);
    const post = 'hello world';

    expect(utils.findForbiddenWords(post)).toMatchObject({post, error: null});
  });

  test('it should return an object with error message when forbidden words are present', () => {
    utils = new Utils([
      {
        words: ['boy', 'girl'],
        suggestion: 'person',
        others: 'individual, child',
      },
    ]);

    const post = 'hello boy';

    const expectedErrorMessage = `🌈  **Your phrase(s) would be more _inclusive_ if you substituted:** 
- **boy** for **person**, or even (**individual, child**)`;

    expect(utils.findForbiddenWords(post)).toMatchObject({
      post: null,
      error: {message: expectedErrorMessage},
    });
  });

  test('it should return an object (with multiple suggestions) with error message when forbidden words are present', () => {
    utils = new Utils([
      {
        words: ['boy', 'girl'],
        suggestion: 'person',
        others: 'individual, child',
      },
      {
        words: ['husband', 'wife'],
        suggestion: 'spouse',
        others: 'consort',
      },
    ]);

    const post = 'hello girl! Are you my husband?';

    const expectedErrorMessage = `🌈  **Your phrase(s) would be more _inclusive_ if you substituted:** 
- **girl** for **person**, or even (**individual, child**)
- **husband** for **spouse**, or even (**consort**)`;

    expect(utils.findForbiddenWords(post)).toMatchObject({
      post: null,
      error: {message: expectedErrorMessage},
    });
  });

  test('it should return an object (with multiple suggestions) and no `others` with error message when forbidden words are present', () => {
    utils = new Utils([
      {
        words: ['boy', 'girl'],
        suggestion: 'person',
        others: '',
      },
      {
        words: ['husband', 'wife'],
        suggestion: 'spouse',
        others: '',
      },
    ]);

    const post = 'hello girl! Are you my husband?';

    const expectedErrorMessage = `🌈  **Your phrase(s) would be more _inclusive_ if you substituted:** 
- **girl** for **person**
- **husband** for **spouse**`;

    expect(utils.findForbiddenWords(post)).toMatchObject({
      post: null,
      error: {message: expectedErrorMessage},
    });
  });
});
