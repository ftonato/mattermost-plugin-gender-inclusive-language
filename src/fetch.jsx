import suggestions from './suggestions';

export const getData = async () =>
  fetch('https://gender-inclusive-language-api.vercel.app').then(response => response.json());

export const defaultData = async () => {
  return {
    data: suggestions,
  };
};
