import path from "path";
import dependable from "dependable";

const container = dependable.container();

  const simpleDependencies = [
    ['_', 'lodash'],
  ]

  // Module register
  simpleDependencies.forEach(val => {
    container.register(val[0], () => require(val[1]))
  })

  // load folders where we likely to used packages
  container.load(path.join(__dirname, '/controllers'))
  container.load(path.join(__dirname, '/helpers'))

  container.register('container', () => container)

  // make use of this in server.js
  export default container;
