class DateTime extends React.Component {
  render() {
    let now = new Date().toLocaleString();
    return React.createElement(
      'span',
      null,
      'Current date and time is ',
      now,
      '.'
    );
  }
}

class HelloWorld extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        '1. Hello'
      ),
      React.createElement(
        'h1',
        null,
        '2. World!'
      )
    );
  }
}

class HelloFramework extends React.Component {
  render() {
    return React.createElement(
      'h1',
      this.props,
      'Hello ',
      this.props.frameworkName,
      '!'
    );
  }
}

class ProfileLink extends React.Component {
  render() {
    return React.createElement(
      'a',
      { href: this.props.url,
        title: this.props.label,
        target: '_blank' },
      'Profile'
    );
  }
}

const ember = React.createElement(HelloFramework, {
  id: 'ember',
  frameworkName: 'Ember.js',
  title: 'A framework for creating ambitious web applications.' });

const backbone = React.createElement(HelloFramework, {
  id: 'backbone',
  frameworkName: 'Backbone.js',
  title: 'Backbone.js gives structure to web applications...' });

const angular = React.createElement(HelloFramework, {
  id: 'angular',
  frameworkName: 'Angular.js',
  title: 'Superheroic JavaScript MVW Framework' });

const container = document.getElementById('content');

// ReactDOM.render(
//   <HelloWorld/>,
//   container
// )

ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(
    'a',
    { href: 'http://ivanarellano.com' },
    'Visit my website'
  ),
  React.createElement('br', null),
  React.createElement(DateTime, { userName: 'Ivan' })
), container);

// ReactDOM.render(
//   <div>
//     {ember}
//     {backbone}
//     {angular}
//   </div>,
//   container
// )
