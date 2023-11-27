const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { id: 'h1' }, 'Hellojiiidfd'),
    React.createElement('h2', { id: 'h2' }, 'H2 Tag'),
  ]),
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { id: 'h1' }, 'Hellojiiidfd'),
    React.createElement('h2', { id: 'h2' }, 'H2 Tag'),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);

// const heading = React.createEleme
// root.render(app);
// root.render(para);
