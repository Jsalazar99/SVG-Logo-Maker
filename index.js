
/* Packages -Import Jest and Inquirer */
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

const shape = require('./shapes');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { runInContext } = require('vm');
//const { createDocument } = require('./document');

/* Instantiate a new Menu class object here and run the main function. */
class LogoMaker {
    constructor() { }

    createLogo() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'What text would you like in the logo? (max 3 characters)',
                    maxLength: 3,
                },
                {
                    type: 'input',
                    name: 'color',
                    message: 'Enter color name',
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Select a logo shape',
                    choices: ["circle", "triangle", "square"]
                },
                {
                    type: 'input',
                    name: 'filename',
                    message: 'Enter a filename for the SVG file:',
                    default: 'logo.svg'
                }
            ])
            .then(({ text, color, shape, filename }) => {
                const logo = shape.create(text, color);
                const svg = logo.render();
                return writeFile(join(__dirname, '..', 'output', filename), svg);
            })

            /*
            const renderShape = (shape) => {
                if (shape === "circle") {
                    return ``
                }
                if (shape === "triangle") {
                    return ``
                }
                if (shape === "square") {
                    return ``
                }
            } */
            // return console log message 
            .then(() => console.log(`Logo generated and saved to ${filename}.`))
            .catch((err) => {
                console.log(err);
                console.log('Oops. Something went wrong.');
            });
    }

    run() {
        this.createLogo();
    }
}

module.exports = LogoMaker;

/*
Classes:
1. Menu class - Ask the questions for the prompt
    1a. We need to have a main method and everything will go in here
    1b. collect user input with inquirer prompts
        1ba. Text for the logo
        1bb. Text color
        1bc. Shape Type
        1bd. Shape Color
    1c. Which shape did the user select?
        1ca. Instantiate a new shape object with the chosen shape
        1cb. Using the object, set the color
    1d. Instantiate a new SVG object with the text AND the shape selected
    1e. Write the SVG object to file called `logo.svg`

2. Shape (color)
    2a. Circle (Classes, render())
    2b. Square (Classes, render())
    2c. Triangle (Classes, render())

3. SVG class (text, shape, render())

*/ 