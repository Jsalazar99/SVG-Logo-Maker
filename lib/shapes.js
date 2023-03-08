//const inquirer = require('inquirer');
//const fs = require('fs');

class Shape {
    
    constructor(color, text, shape) {
      this.color = color;
      this.text = text;
      this.shape = shape; 
    }
    setColor(color){
         this.color = color;
    }
}
class Triangle extends Shape {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}
class Circle extends Shape {
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}
class Square extends Shape {
    render(){
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}

    module.exports = { Circle, Triangle, Square }; 
     