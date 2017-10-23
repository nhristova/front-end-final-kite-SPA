### Prerequisites for local launch

Globally installed

- eslint, babel-eslint, eslint-config-google
- gulp
- yarn
- firebase-tools

Commands:
- `> yarn` or `> npm install` - restore dependencies
- `> http-server` - view the web-site in browser ??
- `> eslint .` - check for errors
- `> firebase init` - Generate a firebase.json (REQUIRED)
- `> firebase serve` - Start development server

Steps:
- Design html & css
- Set up gulp webserver tasks (gulp-webserver)
- Enable ES6 modules in chrome://flags/ - doesn't work - set up SystemJS
- Configure app start, routing (Navigo), controllers
- Set up firebase
