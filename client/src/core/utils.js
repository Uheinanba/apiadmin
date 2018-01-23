// import _ from 'lodash';

export const firstLetteUpperCase = str =>
  str.slice(0, 1).toUpperCase() + str.slice(1);

export const fixJSON = value =>
  value
    .replace(/\s/g, '')
    .replace(/'/g, '"')
    .replace(/(\w+\:)/g, (g, m1) => `"${m1.slice(0, m1.length - 1)}":`);
