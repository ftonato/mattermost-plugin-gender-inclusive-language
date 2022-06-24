import {id, version} from '../src/manifest';
import * as pack from '../package.json';

describe('Manifest', () => {
  test('it should contains the app id and version', () => {
    expect(typeof id).toEqual('string');
    expect(typeof version).toEqual('string');
    expect(id).toContain('gender-inclusive-language');
    expect(version).toContain('.');
  });

  test('it should have the same name and version present in package.json', () => {
    const {name, version: packageVersion} = pack;

    expect(id).toEqual(name);
    expect(version).toEqual(packageVersion);
  });
});
