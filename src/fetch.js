import suggestions from './suggestions';
import REMOTE_SUGGESTIONS_URL from './constants';

const fetchRemoteData = async () => fetch(REMOTE_SUGGESTIONS_URL).then(response => response.json());

const fetchLocalData = async () => ({
  data: suggestions,
});

export {fetchRemoteData, fetchLocalData};
