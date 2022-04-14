import {compile, serialize, stringify, middleware, prefixer } from 'stylis';


const Stylis = (css) => {
  return serialize(compile(css), middleware([prefixer, stringify]))
};

export default Stylis;
