
/* Packages -Import Jest and Inquirer */
const inquirer = require('inquirer');
const fs = require('fs');
//const jest = require('jest');
const { Circle, Square, Triangle } = require('./lib/shapes');
// const { join } = require('path');
const { writeFile } = require('fs/promises');

/* Start the main function for SVG generator */
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
                        return "Please 3 letters max";
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

        .then((answers) => {
            // return writeFile(join(__dirname, '..', 'examples', 'logo.svg'), data);
            let filename = answers.filename;
            fs.writeFileSync(`./examples/${answers.filename}.svg`, answers)
        })

        // return console log message 
        .then(() => console.log(`Logo generated and saved to Examples folder.`))
        .catch((err) => {
            // catch method for error handling 
            console.log('<--- Oops. Something went wrong. --->');
            console.error(err);
        });
}
createLogo()
