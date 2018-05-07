import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom'; // VirtualConsole
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

//const virtualConsole = new VirtualConsole();
//const c = {error(error_string, error_object) {'do something with err'}};
//virtualConsole.sendTo(c, { omitJSDOMErrors: true });

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');//{ virtualConsole }

const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

// Make Enzyme functions available in all test files without importing [performant]
global.shallow = shallow;
global.render = render;
global.mount = mount;

class LocalStorage {
	constructor() {
		this.store = {};
	}

	getItem = (key) => {
		return this.store[key];
	};
	setItem = (key, value) => {
		this.store[key] = value;
	};
	clear = () => {
		this.store = {};
	};
}
global.localStorage = new LocalStorage;
//const requestAnimationFrame = global.requestAnimationFrame = callback => {
//  setTimeout(callback, 0);
//}
 
//export default requestAnimationFrame;