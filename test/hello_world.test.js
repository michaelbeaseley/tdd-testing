const sayHello = require('../src/hello_world');

test('Make sure it returns hello world', ()=> {
    expect(sayHello()).toBe('Hello World!');
});