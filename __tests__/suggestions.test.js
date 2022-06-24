import suggestions from '../src/suggestions';

describe('Suggestions', () => {
  test('it should be an array with a list of forbidden words', () => {
    expect(Array.isArray(suggestions)).toBeTruthy();
    expect(suggestions.length).toBeGreaterThan(1);
  });
});
