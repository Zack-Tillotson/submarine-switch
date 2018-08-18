import namespace from './namespace';

export default state => namespace
  .split('/')
  .reduce((namespaceState, step) => namespaceState[step], state);