# React CSV and JSON Parser

"This project aims to demonstrate the feasibility of using Object-Oriented Programming (OOP) paradigms and current design patterns in a React application. In this simple React CSV and JSON parser project, I used two design patterns: **Strategy** and **Template** Method to choose, in real-time, the type of file I want to use."

## Technologies

- React
- Create React App
- JavaScript/TypeScript
- Design Patterns: Strategy, Template Method

## Instalação

To install the project dependencies, use one of the following:

### Using NPM:
```bash
npm install
```

### Using YARN:
```bash
yarn install
```

In this project, I created a family of algorithms and a class called Context, which holds a reference to the parsing strategies. The Context class can change the strategy in real-time and delegates the responsibility for execution to the selected strategy object. This allows you to create new strategies without modifying the Context class or other existing strategies. I have implemented the Context class, the Strategy interface, and the concrete strategies.

The second design pattern I employed is the Template Method. It defines the skeleton of an algorithm in the parent class, allowing the subclasses to override specific methods without changing the overall structure of the algorithm. To implement this, I used an abstract class with both abstract and concrete methods. The child classes can inherit the behavior and override the abstract method without altering the behavior of the parent class.

If you want to add another strategy or file type parser, you simply need to create a new strategy and concrete template. This way, you can create and export files without needing to use states or custom React hooks.