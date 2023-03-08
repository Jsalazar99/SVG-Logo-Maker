
/* Packages -Import Jest and Inquirer */
const inquirer = require('inquirer');
const fs = require('fs');
//const jest = require('jest');
const { Circle, Square, Triangle } = require('./lib/shapes');
// const { join } = require('path');
const { writeFile } = require('fs/promises');

/* Instantiate a new Menu class object here and run the main function. */

function createLogo() {

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'What letters would you like in the logo? (max 3 characters)',
                // check if text input is 3 or less 
                validate: function (input) {
                    if (input.length > 3) {
                        return "please 3 max";
                    }
                    return true;
                },
            },
            {
                type: 'list',
                name: 'color',
                message: 'Select a color:',
                choices: ["red", "orange", "yellow", "green", "blue", "purple"]
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Select a logo shape:',
                choices: ["circle", "triangle", "square"]
            },
            {
                type: 'input',
                name: 'filename',
                message: 'Enter a filename for the SVG file:',
                default: 'logo.svg'
            }
        ])
        .then((answers) => {

            let shape;
            let filename = answers.filename;

            if (answers.shape === "circle") {
                shape = new Circle();
                shape.setColor(answers.color);

                return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    ${shape.render()}        
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${answers.text}</text>
                    </svg>`
            }
            if (answers.shape === "triangle") {
                shape = new Triangle();
                shape.setColor(answers.color);

                return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    ${shape.render()}        
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${answers.text}</text>
                    </svg>`
            }
            if (answers.shape === "square") {
                shape = new Square();
                shape.setColor(answers.color);

                return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    ${shape.render()}        
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${answers.text}</text>
                    </svg>`
            }

        })

        .then((data) => {
            // return writeFile(join(__dirname, '..', 'examples', 'logo.svg'), data);
            fs.writeFileSync(`./examples/${filename}.svg`, data)
        })

        // return console log message 
        .then(() => console.log(`Logo generated and saved to ${filename}.`))
        .catch((err) => {
            // catch method for error handling 
            console.log('<--- Oops. Something went wrong. --->');
            console.error(err);
        });
}
createLogo()

/*
Classes:
1. Menu class - Ask the questions for the prompt
    1a. We need to have a main method and everything will go in here
    1b. collect user input with inquirer prompts
        1ba. Text for the logo 1bb. Text color    1bc. Shape Type  1bd. Shape Color
    1c. Which shape did the user select?
        1ca. Instantiate a new shape object with the chosen shape
        1cb. Using the object, set the color
    1d. Instantiate a new SVG object with the text AND the shape selected
    1e. Write the SVG object to file called `logo.svg` */
