import fetch from 'isomorphic-fetch';

export default function getFacts() {
  return fetch('')
  .then(res => res.json());
}
