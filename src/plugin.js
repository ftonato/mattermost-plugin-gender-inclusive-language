import Utils from './utils';
import {id as pluginId} from './manifest';
import {fetchLocalData} from './fetch';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["initialize", "uninitialize"] }] */
export default class GenderInclusiveLanguagePlugin {
  async initialize(registry) {
    const {data} = await fetchLocalData();
    const utils = new Utils(data);

    registry.registerMessageWillBePostedHook(post => {
      if (!post.message) {
        return;
      }
      const {error, post: draft} = utils.findForbiddenWords(post.message);

      if (error) {
        return {error};
      }

      return {post: {...post, message: draft}};
    });
  }

  uninitialize() {
    // eslint-disable-next-line no-console
    console.log(`${pluginId}::uninitialize()`);
  }
}
