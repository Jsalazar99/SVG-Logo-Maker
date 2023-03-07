
/* Packages - What tools do I need for this?
- Install Jest and Inquirer

Entry way to application: index.js 
Instantiate a new Menu class object here and run the main function.

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