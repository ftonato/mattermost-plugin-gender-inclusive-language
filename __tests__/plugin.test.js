import Plugin from '../src/plugin';
import * as fetchAPI from '../src/fetch';
import Utils from '../src/utils';

jest.mock('../src/utils');

describe('Plugin class', () => {
  let plugin;
  let registry;
  let consoleSpy;
  let fetchSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(global.console, 'log').mockImplementation((...args) => args);
    fetchSpy = jest.spyOn(fetchAPI, fetchAPI.fetchLocalData.name);

    plugin = new Plugin();
    registry = {
      registerMessageWillBePostedHook: jest.fn(),
    };
  });

  afterEach(() => {
    consoleSpy.mockRestore();
    fetchSpy.mockRestore();

    jest.clearAllMocks();
  });

  test('it should initialize the app', async () => {
    await plugin.initialize(registry);

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(Utils).toHaveBeenCalledTimes(1);

    expect(registry.registerMessageWillBePostedHook).toBeDefined();
    expect(registry.registerMessageWillBePostedHook).toHaveBeenCalled();
    expect(registry.registerMessageWillBePostedHook).toHaveBeenCalledTimes(1);
  });

  test.todo(
    'it should garantee that the registerMessageWillBePostedHook implementation is working',
  );

  test('it should uninitialize the app', () => {
    plugin.initialize(registry);
    plugin.uninitialize();

    expect(consoleSpy).toHaveBeenCalled();
  });
});
