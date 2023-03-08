// Constructor is imported.
const {Circle, Triangle, Square } = require('./shapes.js');

// A testing suite is created.
describe('Shape', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('Triangle', () => {
        it('should create a new triangle shape svg file', () => {
            const triangle = new Triangle();
            triangle.setColor("blue");
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });

    describe('Square', () => {
        it('should create a new square shape svg file', () => {
            const square = new Square();
            square.setColor("orange");
            expect(square.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="orange" />');
        });
    });

    describe('Circle', () => {
        it('should create a new circle shape svg file', () => {
            const circle = new Circle();
            circle.setColor("green");
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
        });
    });

});









