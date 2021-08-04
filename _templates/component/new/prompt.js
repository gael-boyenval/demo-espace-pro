module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the component name ?',
  },
  {
    type: 'select',
    name: 'dir',
    message: 'Where do you want to create a component ?',
    choices: ['ui-kit', 'components', 'screens'],
  },
];
