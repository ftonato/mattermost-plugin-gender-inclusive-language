/* eslint-disable implicit-arrow-linebreak */
import * as fetchAPI from '../src/fetch';

describe('Fetch', () => {
  test('it should return an object with data containing all forbidden words (locally)', async () => {
    const fetchSpy = jest.spyOn(fetchAPI, fetchAPI.fetchLocalData.name);

    const {data} = await fetchAPI.fetchLocalData();
    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBeGreaterThan(1);
    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });

  test('it should return an object with data containing all forbidden words (remote)', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            data: [
              {
                words: ['ad-man', 'ad-woman'],
                suggestion: 'ad-person',
                others: 'advertising executive, promoter',
              },
            ],
          }),
      }));

    const fetchSpy = jest.spyOn(fetchAPI, fetchAPI.fetchRemoteData.name);

    const {data} = await fetchAPI.fetchRemoteData();
    expect(Array.isArray(data)).toBeTruthy();
    expect(data).toHaveLength(1);
    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });
});
