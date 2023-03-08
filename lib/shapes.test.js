// Constructor Arithmetic is imported.
const Shape = require('./index.js');

// A testing suite for Arithmetic is created.
describe('Shape', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('Triangle', () => {
        it('should create a new shape svg file', () => {
            const Shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });

    describe('Square', () => {
        it('should create a new shape svg file', () => {
            const Shape = new Square();
            shape.setColor("orange");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="orange" />');
        });
    });

    describe('Circle', () => {
        it('should create a new shape svg file', () => {
            const Shape = new Circle();
            shape.setColor("green");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
        });
    });

});









