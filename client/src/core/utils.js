// import _ from 'lodash';

export const firstLetteUpperCase = str =>
  str.slice(0, 1).toUpperCase() + str.slice(1);

export const fixJSON = value => {
  return value
    .replace(/\s/g, '')
    .replace(/'/g, '"')
    .replace(
      /(\w+\:)/g, // eslint-disable-line
      (g, m1) => {
        if (/http|https/.test(m1)) return m1;
        return `"${m1.slice(0, m1.length - 1)}":`;
      }, // eslint-disable-line
    );
};
