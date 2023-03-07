
/* Packages - What tools do I need for this?
- Install Jest and Inquirer */
const inquirer = require('inquirer');
const jest = require('jest');
const { writeFile } = require('fs/promises');
//const { createDocument } = require('./document');


/* Entry way to application: index.js 
Instantiate a new Menu class object here and run the main function.
*/
class CLI {
  constructor() {
    this.title = '';

    // Array of task objects e.g. [{ text: string, priority: bool }, ...]
    this.tasks = [];
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Please enter your name',
        },
      ])
      .then(({ name }) => {
        this.title = `${name}'s Tasks`;
        return this.createLogo();
      })
      .then(() => {
        // sort by priority so that priority tasks come before non-priority tasks
        this.tasks.sort((a, b) =>
          a.priority === b.priority ? 0 : a.priority && !b.priority ? -1 : 1
        );

        //
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
        }

        return writeFile(
          join(__dirname, '..', 'output', 'tasks.html'),
          createDocument(this.title, this.tasks)
        );
      })
      .then(() => console.log('Created tasks.html'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }

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
      ])
      .then(({ text, priority, confirmAddTask }) => {
        this.tasks.push({ text, priority });
        if (confirmAddTask) {
          return this.createLogo();
        }
      });
  }
}

module.exports = CLI;

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